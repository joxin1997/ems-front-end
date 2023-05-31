import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Edit from './Pages/Edit/Edit';
import pagenf from './Pages/pagenotfound/Pagenf'
import Pagenf from './Pages/pagenotfound/Pagenf';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
     
      <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    <Route path='/profile/:id' element={<Profile/>}/>
    <Route path='*' element={<Pagenf/>}/>
    
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
