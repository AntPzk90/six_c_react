import React, {useState} from 'react';
import {postReviewAsync, setStatus} from '../../features/reviews/reviewsSlice';
import {useDispatch} from 'react-redux';
import {STARS} from '../../const';

const ReviewsForm = ({id}) => {
  const [starsCount, setStarsCount] = useState(0);
  const [review, setReview] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(setStatus('loading'));
        dispatch(
          postReviewAsync({
            url: `comments/${id}`,
            data: {
              comment: review,
              rating: parseInt(starsCount),
            },
          })
        );
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star) => {
          return (
            <React.Fragment key={star}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={star}
                id={`${star}-stars`}
                type="radio"
                onChange={(evt) => {
                  setStarsCount(parseInt(evt.target.value));
                }}
              />
              <label
                htmlFor={`${star}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={(evt) => {
          setReview(evt.target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 5 || starsCount === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewsForm;
