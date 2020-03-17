import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItems.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, isList } = props;
  const handleSetFavorites = () => {
    props.setFavorite({
      id,
      title,
      year,
      contentRating,
      duration,
      cover,
      isList,
    });
  };
  const handleDeteleFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          { isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={() => handleDeteleFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorites}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
