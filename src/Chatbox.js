import React from 'react';

export default function Chatbox(props){
 const messageType = props.type === 'message' ? 'view': 'hidden';
 const typeOtherThanMessage = props.type === 'message' ? 'hidden': 'view';
 const type = props.type === 'message' ? '' : props.type;
 
 return (
 <div className="chat">
 <div className="messages">
     <span className="chat-time-indicator" data-type-timestamp={props.timestamp}></span>
     <div className={messageType}>
       <p>{props.message}</p>
     </div>
     <div className={typeOtherThanMessage}>
         <strong>{props.name}</strong>
         "gave a {type}"
         <span name={props.type} className={props.type}></span>
     </div>
 </div>
</div>
)
}




