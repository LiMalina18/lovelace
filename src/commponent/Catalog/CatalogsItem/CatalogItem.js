import React from 'react';
import test from './images/test.png'
import  './CatalogItem.css'

const CatalogItem = () => {
    return (
        <div className={'item'}>
            <div >
                <img className={'catalog-images'} src={test} alt="gglglg"/>
            </div>
            <div className={'catalog-subtitle'}>
                <span className={'catalog-subtitle__title'}> Трусы стринги "Гуд карма"</span>
                <span className={'catalog-subtitle__color'}>Цвет: Чёрно-белый</span>
                <span className={'catalog-subtitle__subtitle'}> 12 byn</span>
            </div>
        </div>
    );
};

export default CatalogItem;