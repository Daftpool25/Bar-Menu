import React from 'react'
import ProductsContainer from '../container/productsContainer'
import Category from '../pure/category'
import Header from '../pure/header'
import Product from '../pure/product'




function Home({setCategoryState, categoryState, setMenuDisplay, searchBar, displaySearchBar}) {
  return (
    <div>
      <div className="mx-3 my-3">
        <Header setMenuDisplay={setMenuDisplay} searchBar={searchBar} displaySearchBar={displaySearchBar}/>
        <Category setCategoryState={setCategoryState} categoryState={categoryState}/>
      </div>
      <ProductsContainer categoryState={categoryState}/>
    </div>
  )
}

export default Home