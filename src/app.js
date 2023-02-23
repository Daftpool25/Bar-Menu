import React, { useState } from 'react'
import {Link,Route,Routes,BrowserRouter} from"react-router-dom"
import Home from "./components/page/home"
import Car from "./components/page/car"
import Products from "./components/page/products"
import Favorites from "./components/page/favorite"
import ProductOpened from "./components/page/productOpened"
import "./styles/styles.scss"
import favoriteIcon from "../src/media/favorite.svg"
import homeIcon from "../src/media/home.svg"
import carIcon from "../src/media/car.svg"
import closeIcon from "../src/media/cancel.svg"
import { productsList } from './utils/DB'
import toast, { Toaster } from 'react-hot-toast'



function App() {

  const [categoryState,setCategoryState]=useState("POPULAR")
  const [menuDisplay, setMenuDisplayState] = useState(true)
  const [searchBar, setSearchBar] = useState(true)

  const [car,setCar]=useState([])
  const [favorites,setFavorites]=useState([])

  
  function setMenuDisplay(){
    setTimeout(() => {
      setMenuDisplayState(!menuDisplay);
    }, 600);
  }

  function displaySearchBar (){
    setTimeout(() => {
      setSearchBar(!searchBar)
    }, 600);
  }

  function selectCategory(name){
    setTimeout(() => {
      setMenuDisplayState(!menuDisplay);
    }, 600);
   
    setCategoryState(name)
  }

  function addProductToCar(product){

    const alreadyExist = car.find( item => item.product.Nombre === product.product.Nombre)
    if(alreadyExist){
      car.map(item => {
        if(item.product.Nombre === product.product.Nombre){
          item.qty=item.qty+product.qty
        }
      })
      setCar([...car])
      toast.success('Producto agregado a tu Cuenta')


    }else{
      setCar([...car,product])
      toast.success('Producto agregado a tu Cuenta')

    }
  }

  function removeProductToCar(name){
    let newCar= car.filter( item => item.product.Nombre !== name )
    setCar(newCar)
  }

  function addProductToFav(product){

        const alreadyExist = favorites.find( item => item.Nombre === product.Nombre)

   if(alreadyExist){

    toast.success('El producto ya pertenece a favoritos')

   }else{
    setFavorites([...favorites,product])
    toast.success('Producto agregado a Favoritos')
  }
}


  return (
    <BrowserRouter>
        {menuDisplay?
          <div classsName="mb-5 pb-5">
          <Toaster toastOptions={{duration:3000, className:'.toast'}}/>
                <Routes>
                    <Route exact element={<Home setCategoryState={setCategoryState} categoryState={categoryState} setMenuDisplay={setMenuDisplay} searchBar={searchBar} displaySearchBar={displaySearchBar}/>} path="/"/>
                    <Route element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} path="/favorites"/>
                    <Route element={<Car car={car} removeProductToCar={removeProductToCar}/>} path="/car"/>
                    <Route element={<Products/>} path="/products"/>
                    <Route element={<ProductOpened addProductToCar={addProductToCar} addProductToFav={addProductToFav} />} path="/product/:name"/>
                </Routes>
          </div>
        :
          <div className="categoriesMenu d-flex flex-column justify-content-center align-items-center bg-salmon text-center">
              <h1 className="pb-5">Categorias</h1>
              <div className='col-6 '>
                  <p onClick={() => selectCategory("POPULAR")} className={categoryState==="POPULAR"? "bg-dark rounded-3 px-3 py-1":""}>Todos</p>
                  <p onClick={() => selectCategory("Cervezas")} className={categoryState==="Cervezas"? "bg-dark rounded-3 px-3 py-1":""}>Cervezas</p>
                  <p onClick={() => selectCategory("Cockteles")} className={categoryState==="Cockteles"? "bg-dark rounded-3 px-3 py-1":""}>Cockteles</p>
                  <p onClick={() => selectCategory("Hamburguesas")} className={categoryState==="Hamburguesas"? "bg-dark rounded-3 px-3 py-1":""}>Hamburguesa</p>
                  <p onClick={() => selectCategory("Lomitos")} className={categoryState==="Lomitos"? "bg-dark rounded-3 px-3 py-1":""}>Lomitos</p>
              </div>
              <img className="whiteIcon iconEffect py-2" src={closeIcon} onClick={setMenuDisplay}/>
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