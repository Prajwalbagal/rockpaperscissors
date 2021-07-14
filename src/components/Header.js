import React from 'react';
import '../scss/header.css';

const Header=(props)=>{
    return(
        <>
            <div className="header">
                <div className="left">
                    <div className="leftleft">
                    <span>Rock</span> <br/>
                    <span>Paper</span> <br/>
                    <span>Scissors</span> <br/>
                    </div>
                </div>
                <div className="right">
                    <span className="first">Score</span> <br/>
                    <span className="second">{props.score}</span>
                </div>
            </div>
        </>
    )
}
export default Header;