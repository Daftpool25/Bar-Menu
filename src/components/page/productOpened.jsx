import React from 'react'
import backIcon from "../../media/back.svg"
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



function ProductOpened({addProductToCar}) {

    const navigate= useNavigate()
    const {name}=useParams();
    const product = productsList.find(item => item.Nombre===name)


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



  return (
    <div className="d-flex flex-column p-3 pb-5 bg-darkGray bg-gradient ProductOpenedContainer">
        <div className="d-flex flex-row">
            <img src={backIcon} alt="backIcon" className="whiteIcon" onClick={() => navigate("/")} />
        </div>
        <div className="d-flex flex-column">
            <img src={img} alt="productImage" className="saturated"/>
            <div className="d-flex flex-row col-12">
                <h1 className="col-9">{product.Nombre}</h1>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2 col-3 rounded-4 bg-darkGray p-2">
                    <button className="t">-</button>
                    <label>0</label>
                    <button className="">+</button>
                </div>
            </div>
            <p>{product.Texto}</p>
        </div>

        <div className="mb-5">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <div  className="d-flex flex-column col-4">
                    <p>Precio</p>
                    <h1>{product.Precio}</h1>
                </div>
                <button onClick={() => addProductToCar(product)} className="col-6 salmonBtn rounded-4">Añadir</button>
            </div>      
        </div>
    </div>
  )
}

export default ProductOpened