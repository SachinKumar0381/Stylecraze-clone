import React from 'react'
import './Navbar.css';
import {Input, InputRightElement, InputGroup} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons';

const Navbar = () => {
    let makeup=()=>{
    let drop=document.querySelector("#drop");
    let content=drop.innerHTML=`<h1>sachin</h1>`;
    return content;
    }
  return (
    <div>
    <div style={{border : "1px solid black"}}>
        <div className='search'>
        <img src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="" />
        <div>
        <InputGroup size='sm' width="150px" >
      <Input
        pr='4.5rem'
        type="text"
        placeholder='Search'
        borderRadius="20px"
      />
      <InputRightElement width='4.5rem'>
      <SearchIcon/>
      </InputRightElement>
    </InputGroup>
        </div>
        </div>
        <div className='menu'>
        <div className='dropdown' id='makeup'><h1>MAKEUP</h1>
        <div class="dropdown-content">
  <p>Hello World!</p>
  <p>Sameer Raj</p>
  <p>Ravi Ranjan</p>
  <p>Subham Manav</p>
  </div>
        </div>
         <div className='dropdown' id='haircare'><h1>HAIR CARE</h1>
         <div class="dropdown-content">
  <p>Hello World!</p>
  <p>Sachin Kumar</p>
  <p>Ravi Ranjan</p>
  <p>Subham Manav</p>
  </div>
         </div>
         <h1>SKIN CARE</h1>
         <h1>HAIRSTYLES</h1>
         <h1>HEALTH & WELLNESS</h1>
         <h1 onMouseOver={makeup}>NEWS</h1>
         <h1>TOOLS</h1>
         <h1>PRODUCTS</h1>
         <h1>ABOUT US</h1>
        </div>
    </div>
    <div id='drop'></div>
    </div>
  )
}

export default Navbar