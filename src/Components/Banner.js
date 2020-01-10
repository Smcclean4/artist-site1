import React, { Component } from 'react'

export class Banner extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index  = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index  = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const imgUrls = [];
        return (
            <div className="carousel">
                <Arrow 
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664" />
                <ImageSlider url={ imgUrls[this.state.currentImageIndex] } />
                <Arrow 
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654" />
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
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
        { glyph }
    </div>
);

export default Banner

