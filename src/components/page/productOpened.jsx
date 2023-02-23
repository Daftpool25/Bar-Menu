import React, { useState } from 'react'
import backIcon from "../../media/back.svg"
import favIcon from "../../media/favorite.svg"

import { useParams ,useNavigate} from 'react-router-dom'
import { productsList } from '../../utils/DB'

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



function ProductOpened({addProductToCar, addProductToFav}) {

    const navigate= useNavigate()
    const {name}=useParams();
    const product = productsList.find(item => item.Nombre===name)
    const [productQuanty,setProductQuanty]=useState({product,qty:1})


    let img
    
    if(product.Nombre==="Amber Larger"){img=amberLarger}
    else if(product.Nombre==="Bohemian Pilssener"){img=bohemian}
    else if(product.Nombre==="IPA Patagonia"){img=ipa}
    else if(product.Nombre==="Salta Negra"){img=negra}
    else if(product.Nombre==="Salta Roja"){img=roja}
    else if(product.Nombre==="Salta Rubia"){img=rubia}
    else if(product.Nombre==="Fernet"){img=fernet}
    else if(product.Nombre==="Daiquiri"){img=daiquiri}
    else if(product.Nombre==="Mojito Cubano"){img=mojito}
    else if(product.Nombre==="Lomito Especial"){img=lomito}
    else if(product.Nombre==="Lomito Vegetariano"){img=lomito}
    else if(product.Nombre==="Hamburguesa Monkey"){img=burguer1}
    else if(product.Nombre==="Hamburguesa Monkey Doble"){img=burguer2}

    function incrementQuanty(){
        setProductQuanty({...productQuanty,qty:productQuanty.qty+1})

    }

    function decreaseQuanty(){
        if(productQuanty.qty !== 1){setProductQuanty({...productQuanty,qty:productQuanty.qty-1})}
    }

    function comeBackToHome(url){
        setTimeout(() => {
            navigate(url) 
        }, 500);
    }

  return (
    <div className="d-flex flex-column p-3 pb-5 bg-dark ProductOpenedContainer bg-gradient">
        <div className="d-flex flex-row justify-content-between">
            <img src={backIcon} alt="backIcon" className="whiteIcon iconEffect" onClick={() => comeBackToHome("/")} />
            <img src={favIcon} alt="dotsIcon" className="whiteIcon iconEffect" onClick={()=> addProductToFav(product)} />   
        </div>
        <div className="d-flex flex-column">
            <img src={img} alt="productImage" className="saturated"/>
            <div className="d-flex flex-row col-12 align-items-center justify-content-center mt-3">
                <h1 className="col-8 tittle text-salmon">{product.Nombre}</h1>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2 col-4 rounded-2 p-2">
                    <button className="darkButton fs-3 rounded-3 fw-bold iconEffect" onClick={decreaseQuanty}>-</button>
                    <label>{productQuanty.qty}</label>
                    <button className="darkButton fs-3 rounded-3 fw-bold iconEffect" onClick={incrementQuanty}>+</button>
                </div>
            </div>
            <p>{product.Texto}</p>
        </div>

        <div className="mb-5 mt-3">
            <div className="d-flex flex-row align-items-center justify-content-between px-4">
                <div  className="d-flex flex-column col-5 ">
                    <label className="opacity-75">Precio</label>
                    <h1 className="tittle">{product.Precio}$</h1>
                </div>
                <button onClick={() => addProductToCar(productQuanty)} className="col-6 darkButton rounded-3 fs-1 py-2">Añadir</button>
            </div>      
        </div>
    </div>
  )
}

export default ProductOpened