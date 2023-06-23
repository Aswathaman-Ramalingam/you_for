import React from 'react';
import VerticalSlideBar from './slide_tab';
import Navigation from './nav_bar';

const MyPage: React.FC = () => {
  return (
    <section>
      <Navigation/>
      <VerticalSlideBar />

    </section>    
  );
};

export default MyPage;

