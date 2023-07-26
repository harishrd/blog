import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticleListPage from './pages/ArticleListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<ArticleListPage />} />
                    <Route path="/articles/:articleId" element={<ArticlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App; 