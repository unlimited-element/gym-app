import React from 'react';
// import { Stack, Typography } from '@mui/material';
// import Icon from '../assets/icons/gym.png';
const VisibilitySensor = require('react-visibility-sensor');

function onChange (isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

const BodyPart = ({ item, setBodyPart, bodyPart }) => (


      <VisibilitySensor onChange={onChange}>
        <div>...content goes here...</div>
      </VisibilitySensor>
    );
  

export default BodyPart;
