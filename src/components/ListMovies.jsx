import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveMovie} from "../store/slices/movie.slice";
import '../styles/ListMovies.css'

const ListMovies = ({ element }) => {
  const dispatch = useDispatch();
  const progress = useSelector(state => state.progress);
  const includeTrue = progress.includes(element.number+1);
  const x = progress.includes(element.number );
  let icono = "";


  const send = () => {
    if (progress.includes(element.number)) dispatch(saveMovie({title:element.title, number:element.number, url:element.url}))
    else alert("denegado")
  };

if (includeTrue ) {
  icono ="fas fa-check";

}else if(!x) {
 icono = "fas fa-lock";
}

  return (
    <div onClick={send}>
      <div>
        <div className="box">
          <div className={`percent video-${element.number}`}>
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15" ></circle>
            </svg>
            <p className={ includeTrue ? "check" : null} >{element.title} <i className={icono}></i></p> 
            <div className="number">
              <h2>{element.number}</h2>
            </div>
          </div>
        </div>
        <i className="fas fa-chevron-right levelUp"></i>
      </div>
    </div>
  );
};

export default ListMovies;
