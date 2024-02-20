import React from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';

import List from '../ui/list/List';

const Nav = ({items, town}) => {
  return (
    <section className="locations container">
      <List styleClass={'locations__list tabs__list'}>
        {items.map((navItem) => {
          return (
            <li className="locations__item" key={navItem.title}>
              <Link
                to={{
                  pathname: '/',
                  search: queryString.stringify({town: navItem.link}),
                }}
                className={`locations__item-link tabs__item ${
                  town === navItem.title.toLowerCase()
                    ? ' tabs__item--active'
                    : ''
                }`}
              >
                <span>{navItem.title}</span>
              </Link>
            </li>
          );
        })}
      </List>
    </section>
  );
};

export default Nav;
