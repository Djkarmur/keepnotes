import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import './newnote.css';

const Note = (props) => {
    const deletenode =() =>{
         props.deleteitem(props.id);
        
    }
  return (
    <div className='mainnote'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
       <Button className="delbutton" onClick={deletenode}>
           <DeleteOutlineIcon />
       </Button>
    </div>
  )
}

export default Note