import React from 'react'

function Category({setCategoryState,categoryState}) {

    const active="light-text rounded-3 bg-salmon p-2"
    const inactive="light-text rounded-3 bg-darkGrey p-2"

  return (
    <div className='d-flex flex-row flex-wrap flex-m-nowrap gap-4'>
        <label className={categoryState==="POPULAR"? active:inactive} onClick={() => setCategoryState("POPULAR")}>Popular</label>
        <label className={categoryState==="BEBIDAS"? active:inactive} onClick={() => setCategoryState("BEBIDAS")}>Bebidas</label>
        <label className={categoryState==="COMIDA"? active:inactive} onClick={() => setCategoryState("COMIDA")}>Comida</label>
    </div>
  )
}

export default Category