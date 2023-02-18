import React from 'react'
import closeIcon from "../../media/cancel.svg"

function Car({setCar,car}) {
  return (
    <div className="carContainer d-flex flex-column p-3 py-5">
        <h1>Tu orden</h1>

        <div className="d-flex flex-row col-12 justify-content-around mt-4">
          <p >Item</p>
          <p >Cant</p>
          <p >Precio</p>
        </div>

        {car.map( item => {
          return <div className="d-flex flex-row col-12">
              <div className="d-flex flex-row col-9">
                          <img src="" alt="" />
                          <div className='d-flex flex-column'>
                              <label>{item.Nombre}</label>
                              <label>500$</label>
                          </div>
                          <p className="rounded-4">3</p>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center col-3">
                  <p>$500</p>
                  <img src={closeIcon} className="whiteIcon" alt="closeIcon" />
              </div>
          </div>
        })}

        <div className="col-12 d-flex flex-row">
          <h1 className="col-9">Total</h1>
          <h1 className="col-3">1000$</h1>
        </div>

        <button className="btn">Pagar</button>
    </div>
  )
}

export default Car