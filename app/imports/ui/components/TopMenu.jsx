import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

const menuColor = { color: '#ccc' };
export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Image src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/>
          <Menu.Item style={menuColor} position={'right'}>CAFES</Menu.Item>
          <Menu.Item style={menuColor}>HOTELS</Menu.Item>
          <Menu.Item style={menuColor}>CASINOS</Menu.Item>
          <Menu.Item style={menuColor}>LIVE</Menu.Item>
          <Menu.Item style={menuColor}>SHOP</Menu.Item>
          <Menu.Item style={menuColor}>BLOG</Menu.Item>
          <Menu.Item style={menuColor}>REWARDS</Menu.Item>
        </Menu>
    );
  }
}
