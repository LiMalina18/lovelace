import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardIMG from '../images/header/card.png'

const Card = () => {

    const cardArray = [
        {
            id: 1,
            images: cardIMG,
            button: 'kfkkfmfkmkmr'
        },
        {
            id: 2,
            images: cardIMG,
            button: 'kfeeeeekmkmr'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={'card'}>
            <Slider {...settings}>
                {cardArray.map(el => {
                    return (<div key={el.id}>
                            <div className="card-top">
                                <img src={el.images} alt=""/>
                            </div>
                            <div className="card-bottom">
                                <button>{el.button}</button>
                            </div>
                        </div>

                    )
                })}
            </Slider>


        </div>
    );
};

export default Card;