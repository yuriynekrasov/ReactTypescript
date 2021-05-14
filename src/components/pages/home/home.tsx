import Dragger from '../../common/dragger';
import React from 'react';

const HomeComponent: React.FC<any> = (props) => {

  return (
    <>
      <Dragger
        { ...props }
      />
    </>
  )
}

export default HomeComponent;