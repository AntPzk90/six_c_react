import React from 'react';
import {ratingLine} from '../../helpers/ratingLine';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router';
import {useSelector} from 'react-redux';

const Article = ({hotelInfo, onMouseEnterCb, changeFavoriteHotelCb}) => {
  const history = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} =
    hotelInfo;
  return (
    <li>
      <article
        className="cities__place-card place-card"
        onMouseEnter={() => onMouseEnterCb(id)}
        onMouseLeave={() => {
          onMouseEnterCb(null);
        }}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${id}`}>
            {/*eslint-disable-next-line*/}
            <img
              alt={'Place image'}
              className="place-card__image"
              src={previewImage}
              width={260}
              height={200}
            />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${
                isFavorite ? 'place-card__bookmark-button--active' : ''
              }`}
              type="button"
              onClick={() =>
                isAuth
                  ? changeFavoriteHotelCb(id, isFavorite)
                  : history('/auth')
              }
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: ratingLine(rating)}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="some/valid/url">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </li>
  );
};

export default Article;
