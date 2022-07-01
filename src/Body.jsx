import React, { useState } from 'react';
import AddMiamMiam from './AddMiamMiam';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

const restaurantList = [
  {
    picture:
      'https://lh5.googleusercontent.com/p/AF1QipPnCyRgjMHxFGTunnwHTD0W6E1fRKQ1PuBBUzVw=w600-h321-p-k-no',
    name: 'KingKong',
    grade: 4,
    price: 4,
  },
  {
    picture:
      'https://gourmandcroquant.com/wp-content/uploads/2018/04/IT-768x432.png',
    name: 'IT',
    grade: 1,
    price: 2,
  },
  {
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipNYn4jjSGx1fAD3h99yGrgBfLFSzcV73-CAAakr=w1080-h608-p-no-v0',
    name: 'Wokantine',
    grade: 2,
    price: 2,
  },
  {
    picture:
      'https://media-cdn.tripadvisor.com/media/photo-w/16/a8/b2/0c/getlstd-property-photo.jpg',
    name: 'Sweeteas',
    grade: 3,
    price: 2,
  },
  {
    picture:
      'https://ac-franchise.com/wp-content/uploads/2020/07/La-franchise-Berliner-Das-Original.jpg',
    name: 'Berliner Das Original – Kebab',
    grade: 3,
    price: 2,
  },
  {
    picture:
      'https://lh5.googleusercontent.com/p/AF1QipPMNjQUohkFwHxYsrUEt8HxgRzd8FPIfl3kDIJ4=w600-h420-p-k-no',
    name: 'Zuzuttomo - Original Ramen Noodles from 日本',
    grade: 2,
    price: 2,
  },
];
function Body() {
  const [RestaurantListState, setRestaurantListState] =
    useState(restaurantList);
  return (
    <Switch>
      <Route exact path="/">
        <Home RestaurantListState={RestaurantListState} />
      </Route>
      <Route exact path="/addMiamMiam">
        <AddMiamMiam
          RestaurantListState={RestaurantListState}
          setRestaurantListState={setRestaurantListState}
        />
      </Route>
    </Switch>
  );
}

export default Body;
