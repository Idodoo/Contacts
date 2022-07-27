import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home.js';
import Add from './pages/add/add';
import View from './pages/view/view';
import Edit from './pages/edit/edit';
import Contact from './pages/contact/contact';





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='add' element={<Add />} />

        <Route path='view' element={<View />} />

        <Route path='/view/:id' element={<Edit />} />

        <Route path='/contact/:id' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
