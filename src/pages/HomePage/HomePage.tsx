import React, { Component } from 'react';
// components
import { HomeTitle } from './components/HomeTitle';
import HomeStepper from './components/HomeStepper';

export class HomePage extends Component {
    render(){
        return (
            <main role="main">
                <HomeTitle />
                <HomeStepper  />
            </main>
        )
    }
}