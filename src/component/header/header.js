import React,{useRef} from 'react';
import './hader.css'
function Header() {
const clickRef = useRef()
const handleClick = ()=>{
  clickRef.current.focus()
}

  return (
    <>
    <div className='container'>
    <div className='inputBox'>
    <input placeholder='star wars' name="name" ref={clickRef}/>
    <button className='srcBtn' onClick={handleClick}>Search</button>
    </div>
    </div>
    </>
  )
}

export default Header;