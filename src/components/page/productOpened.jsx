import React from 'react'
import backIcon from "../../media/back.svg"
import img3 from "../../media/products/amber-larger.png"


function ProductOpened() {
  return (
    <div className="d-flex flex-column p-3 bg-darkGray bg-gradient ProductOpenedContainer">
        <div className="d-flex flex-row">
            <img src={backIcon} alt="backIcon" className="whiteIcon" />
        </div>
        <div className="d-flex flex-column">
            <img src={img3} alt="productImage" />
            <div className="d-flex flex-row col-12">
                <h1 className="col-9">Amber larger</h1>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2 col-3 rounded-4 bg-darkGray p-2">
                    <button className="t">-</button>
                    <label>0</label>
                    <button className="">+</button>
                </div>
            </div>
            <p>Cerveza Amber lager de 350 ml, patagonia te traer esta verveza que mezcla lo mejor de una Amber clásica con un nuevo sabor.</p>
        </div>

        <div>
            <div className="d-flex flex-row align-items-center justify-content-between">
                <div  className="d-flex flex-column col-4">
                    <p>Precio</p>
                    <h1>500$</h1>
                </div>
                <button className="col-6 salmonBtn rounded-4">Añadir</button>
            </div>      
        </div>
    </div>
  )
}

export default ProductOpened