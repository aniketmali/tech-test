import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import starImage from '../content/images/star_rating.png'

function Carousel(props) {
    console.log(props);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true,
        arrows: true,
    };

    var relatedProductsCarouselData = [];
    
    props.carouselData.map((carouselItem, index) => {
        relatedProductsCarouselData.push(
            <div className="carousel-item active">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="thumb-wrapper">
                            <div className="img-box">
                                <img src={carouselItem.productImageUrl}
                                 className="img-fluid" alt={carouselItem.productImageAltText} />
                            </div>
                            <div className="thumb-content">
                                <h4>{carouselItem.name}</h4>
                                <p className="item-price"><strike>{carouselItem.price.currency} <span>{Number(carouselItem.price.formattedValue) + Number(carouselItem.price.formattedValue)}</span></strike> <span>{carouselItem.price.currency} {carouselItem.price.formattedValue}</span></p>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        
        )
    });


    return (
        <div className="container">
	<div className="row">
		<div className="col-md-12">
			<h2>Related <b>Products</b></h2>
			<div className="carousel slide">
			<div className="carousel-inner">
            <Slider {...settings}>
                {relatedProductsCarouselData}
            </Slider >
            </div>
		</div>
		</div>
	</div>
</div>
    );
}

const mapStateToProps = state => {
    return {
        carouselData: state.carouselData
    }
}



export default connect(mapStateToProps)(Carousel);