import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import TopNav from './components/TopNav';
import Header from './components/Header';
import Traits from './components/Traits';
// import MrBody from './MrBody';
import Contact from './components/Contact';
import Info from './data/data';
import Footer from './components/Footer';
import './less/styles.less';

export default class App extends Component {
    render() {
        const functionality = () => {
            const hello = 'hello, world!';
            return hello;
        };
        return (
            <div className="page-wrapper">
                {/* {console.warn(functionality())} */}
                <TopNav />
                <Header />
                <Traits info={Info} />
                {/* <MrBody /> */}
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
