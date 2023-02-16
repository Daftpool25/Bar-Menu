import React from 'react'
import Product from '../pure/product'
//images
import img1 from "../../media/products/bohemian-pilssener.png"
import img2 from "../../media/products/ipa.png"
import img3 from "../../media/products/amber-larger.png"

function ProductsContainer() {
  return (
    <div className="d-flex flex-row justify-content-center gap-2 py-4 flex-wrap flex-md-nowrap">
        <Product img={img3} tittle="Amber larger" description="Cerveza Patagona IPA de 350 ml" price="500"/>
        <Product img={img1} tittle="Bohemian Pilssen" description="Cerveza Patagona IPA de 350 ml" price="500"/>
        <Product img={img2} tittle="IPA patagonia" description="Cerveza Patagona IPA de 350 ml" price="500"/>
    </div>
  )
}

export default ProductsContainer