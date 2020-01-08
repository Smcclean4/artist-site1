import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div className="carousel">
                <ImageSlider url={ imgUrl } />
            </div>
        )
    }
}

const ImageSlider = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="image-slider" style={styles}></div>
    )
}

const Arrow = ({ direction, clickFunction, glyph})=> (
    <div
    className={  }
    >

    </div>
);

export default Banner

