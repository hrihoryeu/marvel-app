import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./SingleComicPage.scss"

const SingleComicPage = () => {
  const { comicId } = useParams()

  const [comic, setComic] = useState()
  const { loading, error, getComic, clearError } = useMarvelService()

  useEffect(() => {
    console.log('useeffect')
    onRequest()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicId])

  const onRequest = () => {
    clearError()
    getComic(comicId)
      .then(onComicLoaded)
  }

  const onComicLoaded = (comic) => {
    setComic(comic)
  }

  const skeleton = comic || loading || error ? null : <Skeleton />;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  const content = !(loading || error || !comic) ? <View comic={comic} /> : skeleton

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}

const View = (({ comic }) => {

  const { title, thumbnail, price, description } = comic

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Comic info"/>
        <title>Comic info</title>
      </Helmet>
      < AppBanner />
      <div className="single-comic">
        <div className="single-comic__img-div">
          <img className="single-comic__img" src={thumbnail} alt="" />
        </div>
        <div className="single-comic__info">
          <Link to="/comics" className="single-comic__link">
            Back to comics
          </Link>
          <p>{title}</p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </div>
    </>
  )
})

export default SingleComicPage