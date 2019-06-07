import React from 'react';
import {
  TBar,TopBarContainer,TopBarContainerLeft,
  TopBarContainerLeftSpan, TopBarContainerCenter, TopBarContainerCenterSpan,
  TopBarContainerRight,TopBarContainerRightSpan
} 
  from '../ComponentsStyle/ComponentStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TBar>
      <TopBarContainer>

        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>

        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
        </TopBarContainerCenter>

        <TopBarContainerRight>
          <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TBar>
  )
}

export default TopBar;