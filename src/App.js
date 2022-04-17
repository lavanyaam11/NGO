import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NGOSignIn from './components/NGOSignIn'
import React , {useState} from 'react'

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Header setModalShow={setModalShow}/>
        <NGOSignIn 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        <br/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
