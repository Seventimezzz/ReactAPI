import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {MainPage, ComicsPage, Page404} from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<ComicsPage/>}/>ComicsPage
                        <Route path="/comics" element={<MainPage/>}/>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;