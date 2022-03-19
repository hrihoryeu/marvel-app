import { useState, useEffect } from "react"
import useMarvelService from "../../services/MarvelService";
import './ComicsList.scss'


const ComicsList = () => {
  const [comList, setComList] = useState([])
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [offset, setOffset] = useState(210)
  const [comEnded, setComEnded] = useState(false)

  const {loading, error, getAllComics} = useMarvelService()

  useEffect(() => {
    onRequest(offset, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true)
    getAllComics(offset)
    .then(onComicListLoaded)
  }

  const onComicListLoaded = (newComList) => {
    let ended = false;
    if (newComList.length < 8) {
      ended = true
    }

    setComList(comList => [...comList, ...newComList])
    setNewItemLoading(newItemLoading => false)
    setOffset(offset => offset + 8)
    setComEnded(comEnded => ended)
  }
  window.comics = comList
  return (
    <>
      <div className="comics-container">
        {comList.map((item) => {
          return (
            <div className="comics-item" key={item.id}>
              <div>
                <img className="comics-img" src={item.thumbnail} alt="" />
              </div>
              <p>
                {item.title}
              </p>
              <p>
                {item.price}
              </p>
            </div>
          )
        })}
      </div>
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{'display': comEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
    </button>
    </>
  )
}

export default ComicsList