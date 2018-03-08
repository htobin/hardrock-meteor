import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered className="footer">
          <Grid.Row>
            <h3>HARD ROCK CAFE HONOLULU</h3>
          </Grid.Row>

          <Grid.Row>
            <Item.Content>
              <Icon name={'phone'}/>
              +1-808-955-7383 &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'mail'}/>
              Email US &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'home'}/>
              280 Beachwalk, Honolulu, HI, 96815 &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'twitter'}/>
              <Icon name={'facebook'}/>
              <Icon name={'pinterest'}/>
              <Icon name={'tripadvisor'}/>
            </Item.Content>
          </Grid.Row>
        </Grid>

    );
  }
}