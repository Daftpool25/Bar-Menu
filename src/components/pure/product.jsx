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


function Product({tittle, description,price,onClick}) {

    function openProduct(){
      setTimeout(() => {
        onClick();
      }, 750);
    }

    let img
    
    if(tittle==="Amber Larger"){img=amberLarger}
    else if(tittle==="Bohemian Pilssener"){img=bohemian}
    else if(tittle==="IPA Patagonia"){img=ipa}
    else if(tittle==="Salta Negra"){img=negra}
    else if(tittle==="Salta Roja"){img=roja}
    else if(tittle==="Salta Rubia"){img=rubia}
    else if(tittle==="Fernet"){img=fernet}
    else if(tittle==="Daiquiri"){img=daiquiri}
    else if(tittle==="Mojito Cubano"){img=mojito}
    else if(tittle==="Lomito Especial"){img=lomito}
    else if(tittle==="Lomito Vegetariano"){img=lomito}
    else if(tittle==="Hamburguesa Monkey"){img=burguer1}
    else if(tittle==="Hamburguesa Monkey Doble"){img=burguer2}


  return (
    <div onClick={openProduct} className="productContainer bg-gradient position-relative col-11 col-md-3 rounded-4">
      <div className="d-flex flex-column py-3">
          <img src={img} alt="product"/>
          <h1 className="text-white px-3">{tittle}</h1>
          <div className="d-flex flex-row align-items-center justify-content-center gap-3 p-3">
              <label className="text-light">{description}</label>
              <h1 className="text-white">{price}$</h1>
          </div>
      </div>
    </div>
  )
}

/**
 *       <button className="productBtn position-absolute top-100 start-50 translate-middle">
          +
      </button>
 */

export default Product