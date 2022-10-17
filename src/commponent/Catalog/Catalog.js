import React from 'react';
import './Catalog.css'
import CatalogIMG from './CatalogImages/colection.png'
import CatalogItem from "./CatalogsItem/CatalogItem";
const Catalog = () => {
    return (
        <div className={'container'}>

           <div>
<div >
    <img className={'catalog-img'} src={CatalogIMG} alt=""/>
</div>

              <div className="catalog-items">
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
              </div>


           </div>
        </div>
    );
};

export default Catalog;