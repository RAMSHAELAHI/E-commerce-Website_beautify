import React from 'react' ;
import Navbar from "../app/components/Navbar" ;

import Banner from './components/Banner';
import Carousel from './components/Carousel';
import ProductList from './components/ProductList';
import Progressor from './components/Progressor';
import MenuItems from './components/MenuItems';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';
import Footer from './components/Footer';



export default function App()  {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">

      <Navbar/>
      <Banner/>
      <Carousel/>
      <Progressor/>
      <ProductList/>
      <Progressor/>
      <MenuItems/>
      <Offer/>
      <Card/>
      <Reservation />
      <Footer />
    </div>
  )
}




 