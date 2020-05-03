import React, { Component } from 'react'
import { List as UIList, Image } from 'semantic-ui-react'

export default class List extends Component {
  render() {
    return (
      <UIList selection verticalAlign='middle'>
        <UIList.Item>
          <Image avatar src='https://gravatar.com/avatar/42aee185213244597819df6dda92094c?s=400&d=mp&r=x' />
          <UIList.Content>
            <UIList.Description>Gianna</UIList.Description>
          </UIList.Content>
        </UIList.Item>
        <UIList.Item>
          <Image avatar src='https://gravatar.com/avatar/42aee185213244597819df6dda92094c?s=400&d=mp&r=x' />
          <UIList.Content>
            <UIList.Description>Miller</UIList.Description>
          </UIList.Content>
        </UIList.Item>
        <UIList.Item>
          <Image avatar src='https://gravatar.com/avatar/42aee185213244597819df6dda92094c?s=400&d=mp&r=x' />
          <UIList.Content>
            <UIList.Description>Dawes</UIList.Description>
          </UIList.Content>
        </UIList.Item>
        <UIList.Item>
          <Image avatar src='https://gravatar.com/avatar/42aee185213244597819df6dda92094c?s=400&d=mp&r=x' />
          <UIList.Content>
            <UIList.Description>Hanna</UIList.Description>
          </UIList.Content>
        </UIList.Item>
      </UIList>
    )
  }
}
