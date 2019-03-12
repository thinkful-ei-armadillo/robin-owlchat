import React from 'react';

export default function Stage (props){
    const session = props.onStage ? 'stage view' : 'stage hidden';
return (
    <div className={session}>
        <div className="contact-on-stage" data-tooltip={props.name}>
            <div className="contact-on-stage-video-container">
                <img src={props.avatar} alt={props.name} className="user-avatar contact-on-stage-avatar">
                </img>
                <div className="contact-on-stage-details">
                    <span className="contact-on-stage-details-text">
                    {props.name}
                    </span>
                    <button className="contact-on-stage-details-button"></button>
                </div>
            </div>
        </div>
    </div>
)
}