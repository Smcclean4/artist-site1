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
                <a href="#burger" className="icon"> 
                    {
                        // add onClick function
                    }
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        )
    }
}

export default Navigation


