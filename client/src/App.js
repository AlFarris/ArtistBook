
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/Form.js';
import Navbar from './components/NavBar.js';
import Dashboard from './components/Dashboard.js';
import EditForm from './components/EditForm.js';
import OneArt from './components/OneArt';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div>
        <Navbar></Navbar>
        <Routes>
          <Route path ='/' element={<Dashboard />} />
          <Route path ='/art' element={<Form />} />
          <Route path ='/editart/:id' element={<EditForm />} />
          <Route path ='/artDetails/:id' element={<OneArt />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
