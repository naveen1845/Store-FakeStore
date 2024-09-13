import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FetchProducts from './Services/fetchProducts'
import Products from './Components/Products/Products'

function App() {

  return(
    <div>
      <Navbar/>
      <Products />
    </div>
    
  )
}

export default App
