import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import { AboutUs } from './components/about';
import { ErrorPage } from './components/error-page';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
