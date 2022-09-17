import React, { useState } from "react";
import "../styles/ListPlayerAside.css";
import proflile from "../../public/assets/profile.jpg";
import ListMovies from "../components/ListMovies";
import { useSelector } from "react-redux";

const ListPlayerAside = () => {
 const color = useSelector(state => state.progress)
  const [count, setCount] = useState(1);
 const movies = useSelector(state => state.movies)
 console.log(color);
  return (
    <div className="ListPlayerAside">
      <h3>Masterclass: Designing for web</h3>
      <div className="containerCountMovie">
        <div className="count">{count}/5 COMPLETED</div>
        <div>
          <i className="fas fa-trophy"></i>
        </div>
      </div>
      <div className="containerBar">
        <div className={color[0] == 1 ? "checkBar" : null}></div>
        <div className={color[1] == 2 ? "checkBar" : null}></div>
        <div className={color[2] == 3 ? "checkBar" : null}></div>
        <div className={color[3] == 4 ? "checkBar" : null}></div>
        <div className={color[4] == 5 ? "checkBar" : null}></div>
      </div>
      
      <div className="containerMovies">
      
     {movies.map(element =>(
      <ListMovies element={element} key={element.number}/>
      
     ))}
       
        
       
       
      </div>
      <div className="discussion">
        <h3>Discussion</h3>
        <div className="center primaryProfile">
          <img src={proflile} alt="" />
          <p className="titleProfile">Robin Sherbasky</p>
        </div>
        <p className="textLinea">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accu
        </p>
        <div className="center">
          <i className="fas fa-reply"></i> <p className="reply"> Reply </p>
          <p className="reply"> • show 8 replies</p>
        </div>
        <div className="center">
          <img src={proflile} alt="" />
          <div className="contentProfile ">
            <p className="titleProfile">Jason Statham</p>
            <p>
              Motion in UI • <samp>2:35</samp>
            </p>
          </div>
        </div>
        <div className="containerNoteAux center">
          <div className="circlePlay">
            <i className="fas fa-play"></i>
          </div>{" "}
          <div className="barAux"></div>
        </div>
        <div className="center">
          {" "}
          <i className="fas fa-reply"></i> <p className="reply"> Reply </p>
          <p className="reply"> • Hide replies</p>
        </div>
        <div className="hilo">
          <div className="profileContent center">
            <img src={proflile} alt="" />
            <p className="titleProfile">Robin Sherbasky</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accu</p>
        </div>
      </div>
    </div>
  );
};

export default ListPlayerAside;
