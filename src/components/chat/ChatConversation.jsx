import React, { Component } from 'react'
import { css } from '@emotion/core'

const container = css`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: auto;
  color: #05386b;

  .bubble {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right: 10px;
    width: fit-content;
    background: #edf5e1 0% 0% no-repeat padding-box;
    border-radius: 5px;

    &:before {
      content: ' ';
      position: absolute;
      left: 2%;
      bottom: 53%;
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-right: 10px solid #edf5e1;
      border-bottom: 20px solid transparent;
    }
  }

  .recipient {
    & P {
      width: fit-content;
    }
  }

  .sender {
    align-self: flex-end;

    & P {
      width: fit-content;
    }

    &:before {
      left: 96%;
      bottom: 10px;
      transform: rotate(180deg);
    }
  }
`

export default class ChatConversation extends Component {
  render() {
    return (
      <div css={container}>
        <div className='bubble recipient'>
          <p>Mantul</p>
        </div>
        <div className='bubble sender'>
          <p>Oke bos</p>
        </div>
        <div className='bubble recipient'>
          <p>Apa Kabar ?</p>
        </div>
        <div className='bubble sender'>
          <p>Baik</p>
        </div>
      </div>
    )
  }
}
