import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/play.css';

const Play=(props)=>{
    function setChoice(e){
        props.setMyChoice(e.target.dataset.id);
    }
    return(
        <>
        <div className="play">
            <svg className="triangle" xmlns="http://www.w3.org/2000/svg" width="305" height="277"><path fill="none" stroke="#000" stroke-width="15" d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" opacity=".2"/></svg>
            <Link to="/game">
                <div className="paper" data-id="paper" onClick={setChoice}>

                </div>
            </Link>
            <Link to="/game">
                <div className="scissors" data-id="scissors" onClick={setChoice}>
                
                </div>
            </Link>
            <Link to="/game">
                <div className="rock" data-id="rock" onClick={setChoice}>
                
                </div>
            </Link>
        </div>
        </>
    )
}
export default Play;