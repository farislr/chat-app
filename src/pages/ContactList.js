import React from 'react'
import Header from '../components/Header'
import List from '../components/contactList/List'
import { css } from '@emotion/core'
import { Menu } from 'semantic-ui-react'

const listStyle = css`
  .ui.list > .item > .content {
    padding-left: 36px;
  }

  .ui.list > .item {
    padding-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0px;
  }

  .ui.avatar.image {
    width: 3.6em;
    height: 3.6em;
    margin-top: 9px;
    margin-bottom: 9px;
    margin-left: 13px;
  }
`

export default class ContactList extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Menu>
            <Menu.Item icon='angle left'></Menu.Item>
            <Menu.Item content='Select User' />
          </Menu>
        </Header>
        <div css={listStyle}>
          <List />
        </div>
      </div>
    )
  }
}
