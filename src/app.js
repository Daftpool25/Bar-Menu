import React, { useState } from 'react'
import {Link,Route,Routes,BrowserRouter} from"react-router-dom"
import Home from "./components/page/home"
import Car from "./components/page/car"
import Categories from "./components/page/categories"
import Products from "./components/page/products"
import Favorites from "./components/page/favorite"
import ProductOpened from "./components/page/productOpened"
import "./styles/styles.scss"
import favoriteIcon from "../src/media/favorite.svg"
import homeIcon from "../src/media/home.svg"
import carIcon from "../src/media/car.svg"
import closeIcon from "../src/media/cancel.svg"



function App() {

  const [categoryState,setCategoryState]=useState("POPULAR")
  const [menuDisplay, setMenuDisplayState] = useState(true)
  const [car,setCar]=useState({})
  
  function setMenuDisplay(){
    setMenuDisplayState(!menuDisplay)
  }

  return (
    <BrowserRouter>
        {menuDisplay?
          <div classsName="mb-5 pb-5">
                <Routes>
                    <Route exact element={<Home setCategoryState={setCategoryState} categoryState={categoryState} setMenuDisplay={setMenuDisplay}/>} path="/"/>
                    <Route element={<Favorites/>} path="/favorites"/>
                    <Route element={<Car setCar={setCar} car={car}/>} path="/car"/>
                    <Route element={<Categories/>} path="/categories"/>
                    <Route element={<Products/>} path="/products"/>
                    <Route element={<ProductOpened/>} path="/product/:name"/>
                </Routes>
          </div>
        :
          <div className="categoriesMenu d-flex flex-column justify-content-center align-items-center bg-salmon text-center">
              <h1>Categorias</h1>
              <p>Cervezas</p>
              <p>Cockteles</p>
              <p>Hamburguesa</p>
              <p>Lomitos</p>
              <img className="whiteIcon py-2" src={closeIcon} onClick={setMenuDisplay}/>
          </div>
        }
        <main className='menu d-flex flex-row justify-content-evenly align-items-center p-2 fixed-bottom rounded-bottom rounded-5 '>
            <Link to="/favorites"><img className="whiteIcon py-2" src={favoriteIcon} width="30px"/></Link>
            <Link to="/car"><img className="whiteIcon py-2" src={carIcon} width="30px"/></Link>
            <Link to="/"><img className="whiteIcon py-2" src={homeIcon} width="30px"/></Link>
        </main>
    </BrowserRouter>
  )
}

export default App