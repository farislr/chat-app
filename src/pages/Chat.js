import React, { Component } from 'react'
import Header from '../components/Header'
import { Menu, Image } from 'semantic-ui-react'
import ChatConversation from '../components/chat/ChatConversation'
import ChatInput from '../components/chat/ChatInput'
import { css } from '@emotion/core'

const chatBodyStyles = css`
  display: flex;
  min-height: calc(100vh - 70px);
  flex-direction: column;
  justify-content: flex-end;
`

export default class Chat extends Component {
  render() {
    return (
      <div>
        <Header>
          <Menu>
            <Menu.Item>
              <Image avatar src='https://gravatar.com/avatar/42aee185213244597819df6dda92094c?s=400&d=mp&r=x' />
            </Menu.Item>
            <Menu.Item content='Mark Hopus' />
          </Menu>
        </Header>
        <div css={chatBodyStyles}>
          <ChatConversation />
          <ChatInput />
        </div>
      </div>
    )
  }
}
