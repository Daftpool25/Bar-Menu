import React from 'react'

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

function Favorite({favorites,setFavorites}) {
  return (
    <div>
      {
        favorites.map( item,index => {
          return <div className="d-flex flex-row align-items-center salmonContainer rounded-3 py-2 my-2 col-12 " key={index}>

          <div className="d-flex flex-row col-10 align-items-center ">

              <div className="d-flex flex-row col-7 align-items-center ">
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

              <label className="col-2 rounded-2  py-3 mx-1 text-center">{item.qty}</label>
              <label className="col-2 rounded-2  py-3 mx-1 text-center opacity-75">{item.product.Precio*item.qty}$</label>

          </div>
        
        <button className="darkButton rounded-2" onClick={() => removeProductToCar(item.product.Nombre)}>X</button>
     
      </div>
        })
      }
    </div>
  )
}

export default Favorite