// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
// import App from './App.tsx';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import TopPage from './pages/TopPage';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
    // <StrictMode>
    //     <App />
    // </StrictMode>
);
