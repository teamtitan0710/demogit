import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <ProductCategories />
            <Footer />
        </div>
    );
}

export default App;
