import './appHeader.scss'
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <name className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={{'color': '#9f0013'}} to="/">Characters</NavLink></li>
                    <li><NavLink exact activeStyle={{'color': '#9f0013'}} to="/comics">Comics</NavLink></li>
                </ul>
            </name>
        </header>
    )
}

export default AppHeader;
