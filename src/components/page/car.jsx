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

function Car({car, removeProductToCar}) {
 
 

  return (
    <div className="carContainer d-flex flex-column p-4 mb-3">
       
       
        <div className="d-flex flex-row justify-content-between pb-3">
            <img src={backIcon} width="30px" alt="backIcon" className="whiteIcon iconEffect" onClick={() => comeBackToHome("/")} />
            <img src={dotsIcon} width="30px" alt="dotsIcon" className="whiteIcon iconEffect" onClick={()=> comeBackToHome("/")} />   
        </div>


        <h1 className="tittle mt-3 text-salmon">Tu orden</h1>

        <div className="d-flex flex-row col-10 mt-4">
          <p className="col-7" >Item</p>
          <p className="col-2">Cant</p>
          <p className="col-3 opacity-75">Sub</p>
        </div>

        {car.map( (item,index) => {
          return <div className="d-flex flex-row align-items-center salmonContainer rounded-3 py-2 my-2 col-12 " key={index}>

              <div className="d-flex flex-row col-10 align-items-center ">

                  <div className="d-flex flex-row col-7 align-items-center ">
                          {item.product.Nombre==="Amber Larger" && <img width="50px" src={amberLarger} alt="productThumbNail" />}
                          {item.product.Nombre==="Bohemian Pilssener" && <img width="50px" src={bohemian} alt="productThumbNail" />}
                          {item.product.Nombre==="Salta Negra" && <img width="50px" src={negra} alt="productThumbNail" />}
                          {item.product.Nombre==="Salta Roja" && <img width="50px" src={roja} alt="productThumbNail" />}
                          {item.product.Nombre==="Salta Rubia" && <img width="50px" src={rubia} alt="productThumbNail" />}
                          {item.product.Nombre==="IPA Patagonia" && <img width="50px" src={ipa} alt="productThumbNail" />}
                          {item.product.Nombre==="Fernet" && <img width="50px" src={fernet} alt="productThumbNail" />}
                          {item.product.Nombre==="Daiquiri" && <img width="50px" src={daiquiri} alt="productThumbNail" />}
                          {item.product.Nombre==="Mojito Cubano" && <img width="50px" src={mojito} alt="productThumbNail" />}
                          {item.product.Nombre==="Hamburguesa Monkey" && <img width="50px" src={burguer1} alt="productThumbNail" />}
                          {item.product.Nombre==="Hamburguesa Monkey Doble" && <img width="50px" src={burguer2} alt="productThumbNail" />}
                          {item.product.Nombre==="Lomito Especial" && <img width="50px" src={lomito} alt="productThumbNail" />}
                          {item.product.Nombre==="Lomito Vegetariano" && <img width="50px" src={lomito} alt="productThumbNail" />}

                          
                          <div className='d-flex flex-column'>
                              <label>{item.product.Nombre}</label>
                              <label className="opacity-75">{item.product.Precio}$</label>
                          </div>
                  </div>

                  <label className="col-2 rounded-2  py-3 mx-1 text-center">{item.qty}</label>
                  <label className="col-2 rounded-2  py-3 mx-1 text-center opacity-75">{item.product.Precio*item.qty}$</label>

              </div>
            
            <button className="darkButton rounded-2" onClick={() => removeProductToCar(item.product.Nombre)}>X</button>
         
          </div>
        })}

        <div className="col-12 d-flex flex-row align-items-center my-4">
          <label className="col-8 opacity-75">Total</label>
          <h1 className="col-4 tittle bg-lightGray rounded-3 text-center">{
            car.length>0?
            //car.reduce((a,b) => (a.product.Precio)+(b.product.Precio))
            "ab"
            :
            "0.00"
          }$</h1>
        </div>

        <button className="salmonBtn rounded-4 mb-5">Pagar</button>
    </div>
  )
}

export default Car