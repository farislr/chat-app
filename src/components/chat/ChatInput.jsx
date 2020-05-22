import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize'
import { css } from '@emotion/core'

const formStyles = css`
  display: flex;

  button {
    margin-left: 0.5em !important;
    margin-top: 1em !important;
    margin-right: 1em !important;
    margin-bottom: 1em !important;
  }

  textarea {
    margin-left: 1em !important;
    margin-top: 1em !important;
    margin-right: 0.5em !important;
    margin-bottom: 1em !important;
  }
`

export default class ChatInput extends Component {
  render() {
    return (
      <Form css={formStyles}>
        <TextareaAutosize rows={3} maxRows={3} />
        <Button primary content='Send' />
      </Form>
    )
  }
}
