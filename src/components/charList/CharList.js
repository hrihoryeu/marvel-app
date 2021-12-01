import './charList.scss'
import abyss from '../../resources/img/abyss.jpg'
import MarvelService from "../../services/MarvelService";

const CharList = () => {

    const marvelService = new MarvelService();

    const chars = data.map(item => {
        const {name, thumbnail} = item;
        return (
            <li className="char__item">
                <img src={thumbnail} alt={name} />
                <div className="char__name">{name}</div>
            </li>
        )
    })

    const updateChar = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoaded)
    }

    return (
        <div className="char__list">
            <ul className="char__grid">
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item char__item_selected">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;
