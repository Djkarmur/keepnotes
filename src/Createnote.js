import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './notes.css';

const Createnote = (props) => {

    
    const [note,setnote] = useState({
        title:'',
        content:''
    })
    const[expand,setexpand] =useState(false);

    const onchange=(ev)=>{
        const {name,value}= ev.target;
             
            setnote((prev)=>{
                return{
                ...prev,
                [name]:value,
                }
      }  )     
        
    }
    const Addevent =() =>{
      if(note.title.length > 0){
      props.passnote(note);
      setnote({
          title:'',
          content:''
      })
    }
  }
    const expandit = () =>{
      setexpand(true);
    }
    const normal =()=>{
      setexpand(false);
    }

  return (
      <>
    <div className='notes'  onDoubleClick={normal}>
        <form>
           { expand ? <input  onChange={onchange}type='text' value={note.title} name='title' placeholder='Title' autoComplete='off' /> :null}
            <textarea onClick={expandit}  rows='15' cols=' ' onChange={onchange} value ={note.content} name='content' placeholder='Write Your Note...'> </textarea>
           { expand ? <Button className='createbutton' onClick={Addevent} variant="contained" color="primary"> 
             <AddIcon/>
            </Button>  : null}

        </form>
    </div>
    </>
  )
}

export default Createnote