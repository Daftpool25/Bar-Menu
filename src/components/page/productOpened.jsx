import React from 'react'
import backIcon from "../../media/back.svg"
import img3 from "../../media/products/amber-larger.png"
import { useParams ,useNavigate} from 'react-router-dom'
import { productsList } from '../../utils/DB'



function ProductOpened({addProductToCar}) {

    const navigate= useNavigate()
    const {name}=useParams();
    const product = productsList.find(item => item.Nombre===name)

  return (
    <div className="d-flex flex-column p-3 pb-5 bg-darkGray bg-gradient ProductOpenedContainer">
        <div className="d-flex flex-row">
            <img src={backIcon} alt="backIcon" className="whiteIcon" onClick={() => navigate("/")} />
        </div>
        <div className="d-flex flex-column">
            <img src={img3} alt="productImage" />
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