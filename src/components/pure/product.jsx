import React from 'react'
import imgTest from "../../media/products/ipa.png"


function Product({img,tittle, description,price,onClick}) {


  return (
    <div onClick={onClick} className="productContainer bg-gradient position-relative col-11 col-md-3 rounded-4 p-3">
      <div className="d-flex flex-column py-3">
          <img src={img} alt="product"/>
          <h1 className="text-white">{tittle}</h1>
          <div className="d-flex flex-row align-items-center justify-content-center gap-3">
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