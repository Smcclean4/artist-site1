import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Banner } from './Banner';

export class FullSite extends Component {
    render() {
        return (
            <div id="container">
                <Navigation />
                <br/>
                <br/>
                <br/>
                <Banner />
            </div>
        )
    }
}

export default FullSite

