import { Routes, Route } from 'react-router-dom';
import { React } from 'react'; // Importing React is unnecessary here
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* Renders HomePage component when the path is '/' */}
        <Route path='/ContactPage' element={<ContactPage />} /> {/* Renders ContactPage component when the path is '/ContactPage' */}
        <Route path='/BlogPage' element={<BlogPage />} /> {/* Renders ContactPage component when the path is '/BlogPage' */}
        <Route path='/AboutPage' element={<AboutPage />} /> {/* Renders ContactPage component when the path is '/AboutPage' */}
      </Routes>
    </>
  );
}

export default App;

