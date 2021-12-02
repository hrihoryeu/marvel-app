import { Component} from "react";

import './charList.scss'
import abyss from '../../resources/img/abyss.jpg'
import MarvelService from "../../services/MarvelService";

export default class CharList extends Component {
    state = {
        charList: []
    }

    marvelService = new MarvelService();

    updateChar() {
        this.marvelService
            .getCharacter()
            .then(this.onCharListLoaded)
        console.log(1)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList
        })
        console.log(this.state)
    }

    renderItems(arr) {
        const charList = arr.map((item) => {
            const {name, thumbnail} = item;
            return (
                <li className="char__item">
                    <img src={thumbnail} alt={name} />
                    <div className="char__name">{name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {charList}
            </ul>
        )
    }

    render() {
        const {charList} = this.state;
        const items = this.renderItems(charList);
        return (
            <div className="char__list">
                {items}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}
