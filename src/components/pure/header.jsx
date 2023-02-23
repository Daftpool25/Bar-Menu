import React from 'react';
import searchIcon from "../../media/search.png"
import categoryIcon from "../../media/categories.svg"


function Header({setMenuDisplay,displaySearchBar,searchBar}) {
  return (
    <div >
      
       <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-center d-none d-md-inline col-md-12">
          <h1 className="text-light logo mx-4">Monkey Bar</h1>

          <div className="d-flex flex-row gap-2 position-relative ">
              <input className="rounded-3 w-100" type="text" placeholder='Buscar'/>
              <img src={searchIcon} alt="searchIcon" className="whiteIcon px-2 position-absolute top-50 start-0 translate-middle-y" width="45px" height="45px"/>
          </div>
       </div>

       <div className="d-flex flex-column">
          <div className="d-flex flex-row  justify-content-between align-items-center d-md-none col-md-12">
             <img onClick={setMenuDisplay} src={categoryIcon} alt="categoryIcon" className="whiteIcon iconEffect" width="45px" height="45px"/>
             {searchBar? 
                  <img src={searchIcon} alt="searchIcon" className="whiteIcon iconEffect" width="45px" height="45px" onClick={displaySearchBar}/>
                  :
                  <form className="position-relative" >
                     <input className="rounded-3 w-100" type="text" placeholder='Buscar'/>
                     <img src={searchIcon} alt="searchIcon" className="whiteIcon iconEffect px-2 position-absolute top-50 end-0 translate-middle-y"  width="45px" onClick={displaySearchBar}/>
                  </form>
            }
          </div>
       </div>

    </div>
  )
}

export default Header