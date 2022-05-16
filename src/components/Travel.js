import React from 'react'

export default function Travel(props) {
    return (        
        <div className="card">
            <div className="card-left">
                <img className="card-pic" src={props.item.photo}/>
            </div>
            <div className="card-right">
                <div>
                    <i className="card-country">{props.item.country}</i>
                    <a class="card-maps" href={props.item.maps} target="_blank">View on maps</a>
                </div>
                <h1>{props.item.attraction}</h1>
                <small>{props.item.beginDate} - {props.item.finishDate}</small>
                <p>{props.item.description}</p>     
            </div>       
        </div>
    )
}