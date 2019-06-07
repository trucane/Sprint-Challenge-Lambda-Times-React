import React from 'react';
import {Hder, HderH1, HderSpan} from '../ComponentsStyle/ComponentStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Hder>
      <HderSpan type="date">SMARCH 32, 2018</HderSpan>
      <HderH1>Lambda Times</HderH1>
      <HderSpan type="temp">98°</HderSpan>
    </Hder>
  )
}

export default Header