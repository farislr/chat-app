import React from 'react'
import Header from '../components/Header'
import List from '../components/contactList/List'
import { Container } from 'semantic-ui-react'

export default class ContactList extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <List />
        </Container>
      </div>
    )
  }
}
