import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, SingleComicPage } from "../pages"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className='app'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/comics' element={<ComicsPage />} />
                        <Route path='/comics/:comicId' element={<SingleComicPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
