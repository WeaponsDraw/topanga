import React, { Component } from 'react'
import { Menu, Image, Segment, Header } from 'semantic-ui-react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'dashboard'
    }
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  }


  render() {
    const { activeItem } = this.state

    return (
      <Menu size='huge' pointing secondary>
        <Menu.Item
          onClick={this.handleItemClick} >
          <Header as='h1'>
            Topanga
          </Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='Dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Event Site'
            active={activeItem === 'eventsite'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Image size='mini' circular src="https://react.semantic-ui.com/images/avatar/small/molly.png" />
          </Menu.Item>

        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar;
