import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <Menu>
          <Menu.Item icon='angle left'></Menu.Item>
          <Menu.Item content='Select User' />
        </Menu>
      </nav>
    )
  }
}
