import "../styles/PlayerSection.css";
import ReactPlayer from "react-player";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { saveProgressMovie } from "../store/slices/progressMovies.slice";
import { saveMovie } from "../store/slices/movie.slice";
import ListPlayerAside from "./ListPlayerAside";
import { saveMovieTrue } from "../store/slices/containerMoviesTrue.slice";
import profile from "../../public/assets/profile.jpg";

const PlayerSection = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const progress = useSelector((state) => state.progress);
  const movies = useSelector((state) => state.movies);
  const movieTrue = useSelector((state) => state.movieTrue);

  const amount = progress.length - 1;

  $(document).ready(function () {
    setTimeout(() => {
      $("#asset video").on("timeupdate", function () {
        var duration = $(this)[0].duration;
        var time = $(this)[0].currentTime;
        var pencert = 0;
        var name = $(this).parent().attr("class");
        if (time > 0) pencert = (time * 100) / duration;

        $(".box .percent." + name + " svg circle:nth-child(2)").css(
          "stroke-dashoffset",
          "calc(92 - (92 * " + pencert + ")/100)"
        );
        if (time == duration) {
          dispatch(saveProgressMovie(movie.number + 1));
          dispatch(saveMovieTrue(movieTrue[movie.number]));
        }
      });
    }, 1000);
  });
  console.log(progress);
  const next = () => {
    if (progress.includes(movie.number + 1)) {
      dispatch(saveMovie(movies[movie.number]));
    }
  };
  const prev = () => {
    dispatch(saveMovie(movies[movie.number - 2]));
  };

  return (
    <div className="PlayerSection">
      <section>
        <div className="main">
          <nav>
            <ol className="containerLiMain">
              <li>
                <a href="#">Courses / </a>
              </li>
              <li>
                <a href="#">Desing / </a>
              </li>
              <li>
                <a href="#">
                  <samp>Masterclass: Designing for web</samp>{" "}
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="containerTitleandButton">
          <h1>{movie.title}</h1>
          <div className="containerButtons">
            <samp>CHAPTER {movie.number}/5</samp>

            <div className="buttons">
              <button
                className="prevt"
                onClick={prev}
                disabled={movie.number  === 1}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                className="next"
                onClick={next}
                disabled={movie.number === 5}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="subTitle">
          <p>Natalie Storm, Desing Department</p>
        </div>
        <div className="movie">
          <ReactPlayer
            id="asset"
            className={`video-${movie.number}`}
            url={movie.url}
            width="100%"
            height="100%"
            controls
            volume={0.1}
          />
        </div>
        <div className="containerInformation">
          <div className="mainInformation">
            {" "}
            <ul>
              <li className="selectActive">Notes</li>
              <li>Resources</li>
              <li>Quiz(3)</li>
            </ul>
          </div>
          <div className="information">
            <div className="informationText">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quasi illo esse itaque dicta. Suscipit, asperiores molestias,
                nostrum commodi ipsam corrupti, perspiciatis accusamus
                voluptatum rerum quos velit itaque debitis. Voluptatem.{" "}
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, veritatis quaerat aut in explicabo dolor consectetur
                dolorum nulla ut exercitationem, totam quas ratione tempora
                laudantium atque facilis unde doloribus? Harum?
              </p>
            </div>
            <div className="containerCard">
              <div className="card">
                <h3>About Instructor</h3>
                <div className="photoInformation">
                  <img src={profile} alt="personPhoto" />
                  <div>
                    <h4>Natalie Storm</h4>
                    <p className="subTitleProfile">Design Department</p>
                  </div>
                </div>
                <div className="descriptions">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus illum reiciendis expedita earum eligend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListPlayerAside />
    </div>
  );
};

export default PlayerSection;
