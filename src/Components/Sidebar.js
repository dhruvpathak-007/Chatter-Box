import React, { useState } from 'react'
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItems from './ConversationsItems';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
  // const navigate= useNavigate();


    const [conversations, setConversations] = useState([

        {
            name:"Test#1",
            lastMessage:"Last Message #1",
            timeStamp:"today",
        },
        {
            name:"Test#2",
            lastMessage:"Last Message #1",
            timeStamp:"today",
        },
        {
            name:"Test#3",
            lastMessage:"Last Message #1",
            timeStamp:"today",
        },

    ]);
    const navigate =useNavigate();
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
        
        <div>
        <IconButton onClick={()=>{
          navigate("users")
        }}>
        <PersonAddIcon/>
        </IconButton>
        <IconButton onClick={()=>{
          navigate("groups")
        }}>
        <GroupAddIcon/>
        </IconButton>
        <IconButton onClick={()=>{
          navigate("create-groups")
        }}>
        <AddCircleIcon/>
        </IconButton>
        <IconButton>
        <ModeNightIcon/>
        </IconButton>
        </div>
        
      </div>
      <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>

      <div className='sb-conversations'>
        {conversations.map((conversation) =>{
            return <ConversationsItems props={conversation} key={conversation.name} onClick={()=>{
              navigate("chat")
            }}/>
        })}
      </div>

    </div>
  )
  
}

export default Sidebar;
