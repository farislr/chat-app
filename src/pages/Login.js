import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { css } from '@emotion/core'

const StyledContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;

  .ui.input > input {
    text-align: center;
  }

  .ui.button {
    margin-top: 10px;
  }
`

export default class Login extends React.Component {
  render() {
    return (
      <div css={StyledContainer}>
        <div style={{ marginBottom: 5, fontWeight: 'regular' }}>Write your name</div>
        <Input className={this.props.className} />
        <Button primary content='Go' />
      </div>
    )
  }
}
