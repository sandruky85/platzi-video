import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CaoruselItem';
import Search from '../components/Search';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='My list'>
      <Carousel>
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>
    <Categories title='Originals from Platzi Video'>
      <Carousel>
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>
    <Categories title='Last created'>
      <Carousel>
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
