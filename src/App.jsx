import {BrowserRouter as Router, Routes, Route, useNavigate, Link, NavLink, Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { useEffect } from 'react';
import { fetchProducts } from './assets/redux/productsSlice';
import NavigationBar from './pages/NavigationBar';

function App() {

  const dispatch=useDispatch();
  const state=useSelector((state)=>state.products)

  useEffect(()=>{
    dispatch(fetchProducts());
    console.log('we have dispatched ')
    console.log(state)
  },[])




  return (

    <div >
      <div>

  

        <Router>
          <div className='pb-10'><NavigationBar/></div>
        
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          
        </Routes>
        </Router>
      </div>
      </div>

    
  )
}

export default App
