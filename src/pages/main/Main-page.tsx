import React, { Component } from 'react';
// components
import { MainTitle } from './components/Main-title';
import { MainStepper } from './components/Main-stepper';

export class MainPage extends Component {
    render(){
        return (
            <main role="main">
                <MainTitle />
                <MainStepper />
            </main>
        )
    }
}