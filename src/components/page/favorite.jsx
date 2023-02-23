import React from 'react'
import closeIcon from "../../media/cancel.svg"
import backIcon from "../../media/back.svg"
import dotsIcon from "../../media/dots.svg"


import amberLarger from "../../media/products/amber-larger.png"
import bohemian from "../../media/products/bohemian-pilssener.png"
import ipa from "../../media/products/ipa.png"
import roja from "../../media/products/roja.png"
import negra from "../../media/products/negra.png"
import rubia from "../../media/products/rubia.png"
import fernet from "../../media/products/fernet.png"
import daiquiri from "../../media/products/daiquiri.png"
import mojito from "../../media/products/mojito.png"
import burguer1 from "../../media/products/burguer1.png"
import burguer2 from "../../media/products/burguer2.png"
import lomito from "../../media/products/lomito.png"
import { useNavigate } from 'react-router-dom'

function Favorite({favorites,removeFav}) {

  const navigate=useNavigate()

  function goToProduct(route){
    setTimeout(() => {
      navigate(route)
    }, 600);
  }

  return (<div className="carContainer d-flex flex-column p-4 mb-3">

    <div className="d-flex flex-row justify-content-between pb-3">
            <img src={backIcon} width="30px" alt="backIcon" className="whiteIcon iconEffect" onClick={() => goToProduct(-1)} />
            <img src={dotsIcon} width="30px" alt="dotsIcon" className="whiteIcon iconEffect" onClick={()=> goToProduct("/")} />   
    </div>

    <h1 className="tittle text-center mt-3 text-salmon">Tus favoritos</h1>
    {
      favorites.length!==0?

        <div>
        {
          favorites.map( (item,index) => {
            return <div className="expanded d-flex flex-row align-items-center salmonContainer rounded-3 py-2 my-2 col-12 " key={index} >

                <div className="d-flex flex-row col-10 align-items-center gap-3 px-2" onClick={()=> goToProduct(`/product/${item.Nombre}`)}>
                        {item.Nombre==="Amber Larger" && <img width="50px" src={amberLarger} alt="productThumbNail" />}
                        {item.Nombre==="Bohemian Pilssener" && <img width="50px" src={bohemian} alt="productThumbNail" />}
                        {item.Nombre==="Salta Negra" && <img width="50px" src={negra} alt="productThumbNail" />}
                        {item.Nombre==="Salta Roja" && <img width="50px" src={roja} alt="productThumbNail" />}
                        {item.Nombre==="Salta Rubia" && <img width="50px" src={rubia} alt="productThumbNail" />}
                        {item.Nombre==="IPA Patagonia" && <img width="50px" src={ipa} alt="productThumbNail" />}
                        {item.Nombre==="Fernet" && <img width="50px" src={fernet} alt="productThumbNail" />}
                        {item.Nombre==="Daiquiri" && <img width="50px" src={daiquiri} alt="productThumbNail" />}
                        {item.Nombre==="Mojito Cubano" && <img width="50px" src={mojito} alt="productThumbNail" />}
                        {item.Nombre==="Hamburguesa Monkey" && <img width="50px" src={burguer1} alt="productThumbNail" />}
                        {item.Nombre==="Hamburguesa Monkey Doble" && <img width="50px" src={burguer2} alt="productThumbNail" />}
                        {item.Nombre==="Lomito Especial" && <img width="50px" src={lomito} alt="productThumbNail" />}
                        {item.Nombre==="Lomito Vegetariano" && <img width="50px" src={lomito} alt="productThumbNail" />}

                        
                        <div className='d-flex flex-column'>
                            <label>{item.Nombre}</label>
                            <label className="opacity-75">{item.Precio}$</label>
                        </div>   
            </div>

            <img src={closeIcon} width="30px" alt="closeIcon" className="whiteIcon iconEffect" onClick={()=> removeFav(item.Nombre)}/>

        </div>
        })}
      </div>
      :
      <div className="py-5">
              <p className='text-center'>No tienes favoritos...aún</p>
      </div>
    }
    </div>
  )
}

export default Favorite