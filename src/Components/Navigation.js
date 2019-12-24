import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        return (
            <div className="topnav" id="thetopnav">
                <a href="#home" className="active">Home</a>
                <a href="#music">Music</a>
                <a href="#merch">Merch</a>
                <a href="#contact">Contact</a>
                <img alt="RFV Brand Logo" src="https://i.imgur.com/z0x6Ubu.png" className="rfvlogo" />
            </div>
        )
    }
}

export default Navigation


