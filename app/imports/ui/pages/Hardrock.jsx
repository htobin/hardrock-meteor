import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleImage from '../components/MiddleImage';
import FooterMenu from '../components/FooterMenu';

export default class Hardrock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <FooterMenu/>
        </div>
    );
  }
}
