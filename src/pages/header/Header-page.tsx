import * as React from 'react';
// components
import HeaderTitle from './components/Header-title';
import HeaderNav from './components/Header-nav';

export class HeaderPage extends React.Component {
    render() {
        return (
            <header>
                <HeaderTitle mainTitle={'Bookstore'}/>
                <HeaderNav loggedIn={false}/>
            </header>
        )
    }
}
