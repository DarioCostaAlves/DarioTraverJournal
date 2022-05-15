import React from 'react'

export default function Travel() {
    return (        
        <div className="travelCard">
            <div className="card-left">
                <img className="card-pic" src="https://twomonkeystravelgroup.com/wp-content/uploads/2020/01/15-Best-Things-To-Do-in-Dortmund-Germany.jpg"/>
            </div>
            <div className="card-right">
                <div>
                    <i>Portugal</i>
                    <a href="#" className="">View on maps</a>
                </div>
                <h1>Netherlands</h1>
                <small>15 March, 2022 - 20 March, 2022</small>
                <p>What is happening right here</p>     
            </div>       
        </div>
    )
}