import React, { useState } from "react";
import Createnote from "./Createnote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import './newnote.css';

const App = () => {
  const [item, setitem] = useState([]);
  const addnote = (note) => {
    
    setitem((prev) => {
      return [...prev, note];
    });
    
  };
  const deletenote =(id)=>{
   setitem((olddata)=>{
    return olddata.filter((data,index)=>{
       return ( index !== id)
     })
   })
  };
  return (
    <div className="bodycover">
      <Header />
      
      <Createnote passnote={addnote} />
      <div className="notecontent">
     {item.map((val,index)=>{
      return (
        
         <Note key={index}
       id={index}
       title={val.title}
       content={val.content}
       deleteitem={deletenote}
     /> 
     )
     
     })}
     </div>
     
     <Footer />
     
    </div>
  );
};

export default App;
