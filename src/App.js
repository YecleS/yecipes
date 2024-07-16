import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/UIComponents/Header';
import Home from './Components/Pages/Home';
import Footer from './Components/UIComponents/Footer';
import AboutUs from './Components/Pages/AboutUs';
import Catalog from './Components/Pages/Catalog';
import ContactUs from './Components/Pages/ContactUs';
import DishInfo from './Components/UIComponents/DishInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <Header />
        </header>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/dish-info' element={<DishInfo />} />
          </Routes>
        </main>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
