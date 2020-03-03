import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CaoruselItem';
import Search from '../components/Search';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitalState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {

  const initialState = useInitalState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.trends.length > 0 && (
        <Categories title='Trends'>
          <Carousel>
            {initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.originals.length > 0 && (
        <Categories title='Originals from Platzi Video'>
          <Carousel>
            {initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};

export default App;
