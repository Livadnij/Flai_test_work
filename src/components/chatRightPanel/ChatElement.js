import React from 'react'
import { ChatBox, ChatWrapper, FreePlanBox, TextAreaBox } from './ChatStyles'
import SendIcon from './icons8-send 1.svg'

export const ChatElement = () => {
  return (
    <ChatWrapper>
        <FreePlanBox>
            <h3>Free Plam</h3>
            <h1>There are 10 free requests left</h1>
            <button> <span>Buy Premium</span></button>
        </FreePlanBox>
        <ChatBox>

        </ChatBox>
        <TextAreaBox>
            <span> Enter your request...</span>
            <button>
                <img src={SendIcon}/>
            </button>
        </TextAreaBox>
    </ChatWrapper>
  )
}
