import React from 'react';
import searchIcon from "../../media/search.png"
import categoryIcon from "../../media/categories.svg"


function Header({setMenuDisplay}) {
  return (
    <div >
      
       <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-center d-none d-md-inline col-md-12">
          <h1 className="text-light logo mx-4">Monkey Bar</h1>

          <div className="d-flex flex-row gap-2 position-relative ">
              <input className="rounded-4 " type="text" placeholder='Buscar'/>
              <img src={searchIcon} alt="searchIcon" className="whiteIcon px-2 position-absolute top-50 start-0 translate-middle-y" width="45px" height="45px"/>
          </div>
       </div>

       <div className="d-flex flex-column ">
          <div className="d-flex flex-row  justify-content-between align-items-center d-md-none col-md-12">
             <img onClick={setMenuDisplay} src={categoryIcon} alt="categoryIcon" className="whiteIcon" width="45px" height="45px"/>
             <img src={searchIcon} alt="searchIcon" className="whiteIcon" width="45px" height="45px"/>
          </div>
          <h1 className="text-light logo my-3">Monkey Bar</h1>
       </div>

    </div>
  )
}

export default Header