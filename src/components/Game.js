import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../scss/game.css';

const Game=(props)=>{

    const [house,setHouse]=useState("");
    const [playerWin,setplayerWin]=useState("");
    
    useEffect(()=>{
        newHousePick();
    },[]);
    
    const newHousePick=()=>{
        const choices=["rock","paper","scissors"];
        setHouse(choices[Math.floor(Math.random()*3)]);
    }
    
    const compare=()=>{
        if(house=="rock" && props.myChoice=="paper"){
            props.setScore(props.score+1);
            setplayerWin("true");
        }
        else if(house=="paper" && props.myChoice=="rock"){
            props.setScore(props.score-1);
            setplayerWin("false");
        }
        else if(house=="rock" && props.myChoice=="scissors"){
            props.setScore(props.score-1);
            setplayerWin("false");
        }
        else if(house=="scissors" && props.myChoice=="rock"){
            props.setScore(props.score+1);
            setplayerWin("true");
        }
        else if(house=="scissors" && props.myChoice=="paper"){
            props.setScore(props.score-1);
            setplayerWin("false");
        }
        else if(house=="paper" && props.myChoice=="scissors"){
            props.setScore(props.score+1);
            setplayerWin("true");
        }
        else{
            props.setScore(props.score+0);
            setplayerWin("Draw");
        }
    }

    useEffect(()=>{
        compare();
    },[house]);


    return(
        <>
        <div className="game">
                <div className="row">
                <h2 className="t1">You Picked</h2>
                <h2 className="t2">The House Picked</h2>
                </div>
                <div className="betw">
                <div className={`icon-${props.myChoice}`}   ></div>
                <div className="col">
                {playerWin=="true"?<h1 className="t5">You Won</h1>:<></>}
                {playerWin=="false"?<h1 className="t5">You Lose</h1>:<></>}
                {playerWin=="Draw"?<h1 className="t5">DRAW</h1>:<></>}
                <Link to="/" className="t6" onClick={()=>setHouse("") }>
                <h2 className="again">Play Again</h2>
                </Link>
                </div>
                <div className={`icon--${house}`}></div>
                </div>
               
                
            
           
        </div>
        </>
    )
}
export default Game;