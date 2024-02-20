import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';

import {getReviewsAsync} from '../../features/reviews/reviewsSlice';

import ReviewsForm from '../../components/reviews-form/ReviewsForm';
import List from '../../components/ui/list/List';
import Review from '../../components/review/Review';
import Loader from '../../components/loader/loader';

const ReviewsBlock = ({isAuth}) => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const loading = useSelector((state) => state.reviews.status);
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewsAsync(`comments/${id}`));
    // eslint-disable-next-line
  }, [id]);
  if (loading === 'loading') return <Loader />;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <List styleClass={'reviews__list'}>
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </List>
      {isAuth && <ReviewsForm id={id} />}
    </section>
  );
};

export default ReviewsBlock;
