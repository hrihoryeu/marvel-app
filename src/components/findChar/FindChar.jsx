import "./FindChar.scss"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { NavLink } from "react-router-dom"

import useMarvelService from "../../services/MarvelService"
import { useState } from "react"

const FindChar = () => {
  const [charFound, setCharFound] = useState(null)
  const {getCharacterByName} = useMarvelService()

  const showResult = (name) => {
    setCharFound(null)
    getCharacterByName(name)
      .then(setCharFound)
    }

  return (
    <div className="form">
      <Formik
        initialValues={
          {text: ''}
        }
        validationSchema={Yup.object({
          text: Yup.string()
            .required('This field is required')
        })
        }
        onSubmit={(values) => showResult(values.text)}>
        <Form>
          <h3 className="form__text">Or find character by name:</h3>
          <div className="form__content">
            <label htmlFor="text"></label>
            <Field
              id="text"
              name="text"
              type="text"
              placeholder="Enter name"
              className="form__input">
            </Field>
            <button className="button button__main" type="submit">
              <div className="inner">find</div>
            </button>
          </div>
          <ErrorMessage name="text" className="form__error" component="h3"/>
          {charFound && (
            <div className="form__content">
              <h3 className="form__found">There is! Visit {charFound.name} page?</h3>
              <NavLink className="button button__secondary" to={`/characters/${charFound.id}`}>
                <div className="inner">find</div>
              </NavLink>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  )
}

export default FindChar