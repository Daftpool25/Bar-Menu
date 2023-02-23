import React from 'react'
import {useNavigate} from "react-router-dom"
import Product from '../pure/product'
//images
import img1 from "../../media/products/bohemian-pilssener.png"
import img2 from "../../media/products/ipa.png"
import img3 from "../../media/products/amber-larger.png"
import { productsList } from '../../utils/DB'

function ProductsContainer({categoryState}) {

  const navigate=useNavigate();

  return (
    <div className="d-flex flex-row justify-content-center gap-3 py-4 flex-wrap pb-5 mb-3">
         {categoryState==="POPULAR" && productsList.map( (item,index) =>  <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> navigate(`/product/${item.Nombre}`)}/> )}
         {categoryState==="BEBIDAS" && productsList.map( (item,index) =>{ if(item.categoria.categoria==="Bebidas"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}
         {categoryState==="COMIDA" && productsList.map( (item,index) =>{ if(item.categoria.categoria==="Comidas"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}
         {categoryState==="Cervezas" && productsList.map( (item,index) =>{ if(item.categoria.subcategoria==="Cervezas"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}
         {categoryState==="Cockteles" && productsList.map( (item,index) =>{ if(item.categoria.subcategoria==="Cockteles"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}
         {categoryState==="Lomitos" && productsList.map( (item,index) =>{ if(item.categoria.subcategoria==="Lomitos"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}
         {categoryState==="Hamburguesas" && productsList.map( (item,index) =>{ if(item.categoria.subcategoria==="Hamburguesas"){ return <Product img={img3} tittle={item.Nombre} description={item.Descripcion} price={item.Precio} key={index} onClick={()=> {navigate(`/product/${item.Nombre}`)}}/> }})}

    </div>
  )
}

export default ProductsContainer