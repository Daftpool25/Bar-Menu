import React from 'react'
import ProductsContainer from '../container/productsContainer'
import Category from '../pure/category'
import Header from '../pure/header'
import Product from '../pure/product'




function Home({setCategoryState,categoryState,setMenuDisplay}) {
  return (
    <div className="m-3">
      <div className="mx-3">
        <Header setMenuDisplay={setMenuDisplay}/>
        <Category setCategoryState={setCategoryState} categoryState={categoryState}/>
      </div>
      <ProductsContainer/>
    </div>
  )
}

export default Home