import React from 'react';
import './myStyles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';



function chatArea({props}) {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>T</p>
        <div className='header-text'>
          <p className='con-title'>Test#1</p>
          <p className='con-timeStamp'>today</p>
        </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='message-container'>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>                
      </div>
      <div className='text-inputs-area'>
      <input placeholder='Type a message' className='search-box'/>
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default chatArea;


