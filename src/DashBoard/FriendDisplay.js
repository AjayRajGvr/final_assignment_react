import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import DisplayDetails from './DisplayDetails';
import './listStyles.css'


const FriendDisplay = (props) => {

   const name= props.first_name
   console.log(props.last_name)
   function handleClick() {
    <DisplayDetails data={name} />
    alert('Name :'+props.first_name+'\nEmail:'+props.email);
    
}
return (



    <div className='column'>
    <div className='card' >
      <img src={props.avatar} alt='hotel imge' style={{width:'100%'}} /> 
    <h1>{props.first_name} {props.last_name}</h1>
    <h2 className="title">{props.email}</h2>
    <button onClick={handleClick}>View Profile</button> 
</div>
</div>
)
}


export default withRouter(FriendDisplay);


