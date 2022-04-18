import React  from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NGOSignUp from './components/NGOSignUp'
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/ngoRegistration' element={<NGOSignUp />}/>
        </Routes>
        <br/>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
