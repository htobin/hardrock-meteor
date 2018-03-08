import React from 'react';
import { Menu, Image } from 'semantic-ui-react';


export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Image src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/>
          <Menu.Item position={'right'}>CAFES</Menu.Item>
          <Menu.Item>HOTELS</Menu.Item>
          <Menu.Item>CASINOS</Menu.Item>
          <Menu.Item>LIVE</Menu.Item>
          <Menu.Item>SHOP</Menu.Item>
          <Menu.Item>BLOG</Menu.Item>
          <Menu.Item>REWARDS</Menu.Item>
        </Menu>
    );
  }
}
