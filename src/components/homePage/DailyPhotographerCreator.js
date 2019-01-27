import React from 'react';

import photographers from '../../photographs/photographs';
import DailyPhotographer from '../../views/homePage/DailyPhotographer';

const randomPhotographer = photographers[Math.floor(Math.random() * photographers.length)];

const DailyPhotographerCreator = () => {
  return (
    <DailyPhotographer {...randomPhotographer}/>
  )
};

export default DailyPhotographerCreator;