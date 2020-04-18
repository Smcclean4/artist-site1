import React, { Component } from 'react'

const ImgUrls = ["https://i.imgur.com/8T9VSVa.jpg", "https://i.imgur.com/6oL7z0o.jpg", 
    "https://i.imgur.com/hyoXpef.jpg?1", "https://i.imgur.com/sJcD6J9.jpg", "https://i.imgur.com/erkPzsj.jpg", 
"https://i.imgur.com/U3KngPK.jpg?1"];

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
        const lastIndex = ImgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index  = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = ImgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index  = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <Arrow 
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
                <ImageSlide url={ ImgUrls[this.state.currentImageIndex] } />
                <Arrow 
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </div>
        );
    }
}

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="image-slide" style={styles}></div>
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

