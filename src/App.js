import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/edit/:id' element={<UpdateUser />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
