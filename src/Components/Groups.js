import React from 'react';
import './myStyles.css';
import logo from "../Images/canva4.png";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function Groups() {
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <img src={logo} style={{height:"2.5rem",width:"2.5rem"}} alt='logo'/>
            <p className='ug-title'>Online Groups</p>
        </div>
        <div className='sb-search'>
            <IconButton>
            <SearchIcon/>
            </IconButton>
            <input placeholder='Search' className='search-box'/>            
        </div>
        <div className='ug-list'>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Group 1</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Group 2</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Group 3</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Group 4</p>
            </div>
        </div>
    </div>
  )
}

export default Groups;
