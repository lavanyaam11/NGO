import React , {useState} from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NGOSignIn from './components/NGOSignIn'
import NGOSignUp from './components/NGOSignUp'

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header setModalShow={setModalShow}/>
        <NGOSignIn 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        
        <Routes>
          <Route path='/ngoRegistration' element={<NGOSignUp />}/>
        </Routes>
        <br/>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
