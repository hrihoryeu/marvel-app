import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./SingleComicPage.scss"

const SingleCharPage = () => {
  const { charId } = useParams()

  const [char, setChar] = useState()
  const { loading, error, getCharacter, clearError } = useMarvelService()

  useEffect(() => {
    onRequest()
  }, [charId])

  const onRequest = () => {
    clearError()
    getCharacter(charId)
      .then(onCharLoaded)
  }

  const onCharLoaded = (char) => {
    setChar(char)
  }

  const skeleton = char || loading || error ? null : <Skeleton />;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  const content = !(loading || error || !char) ? <View char={char} /> : skeleton

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}

const View = (({ char }) => {

  const { name, thumbnail, description } = char

  return (
    <>
      < AppBanner />
      <div className="single-comic">
        <div className="single-comic__img-div">
          <img className="single-comic__img" src={thumbnail} alt="" />
        </div>
        <div className="single-comic__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
})

export default SingleCharPage