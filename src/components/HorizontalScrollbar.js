import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Button onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Button>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Button onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Button>
//   );
// };

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 15px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
