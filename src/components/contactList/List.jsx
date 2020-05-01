import React, { Component } from 'react'
import { List as UIList, Image } from 'semantic-ui-react'

export default class List extends Component {
  render() {
    return (
      <UIList>
        <UIList.Item>
          <Image avatar content='https://gravatar.com/avatar/2a69bcfdbba2571f04f43c8c3701dd9b?s=400&d=robohash&r=x' />
          <UIList.Content>list 1</UIList.Content>
        </UIList.Item>
        <UIList.Item>list 2</UIList.Item>
        <UIList.Item>list 3</UIList.Item>
      </UIList>
    )
  }
}
