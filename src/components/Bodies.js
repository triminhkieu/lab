import React, { useState } from "react";
import { Film } from "../constants/FilmsObject";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Container, Toast } from "react-materialize";

function FilmBody() {
  const [nameDemo, setNameDemo] = useState("");
  return (
    <Container style={{marginBottom:"10%"}}>
      <div>
        <div className="row">
          {Film.map((Movie, index) => {
            return (
              <div key={index}>
                <div className="column" key={Movie.id} class="col s4">
                  <div className="card">
                    <img
                      src={Movie.Image}
                      alt="image"
                      style={{ width: 300, height: 300 }}
                    ></img>
                    <h6 className="title">{Movie.Title}</h6>
                    <>
                      <button
                        onClick={() => {
                          setNameDemo(Movie);
                        }}
                      >
                        <a href="#popup1" id="openPopUp">
                          Detail
                        </a>
                      </button>
                      
                    </>

                    {console.log(nameDemo)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={nameDemo.Image} style={{ width: 300, height: 300 }}></img>
            <h2>{nameDemo.Title}</h2>
            <a className="close" href="#">
              &times;
            </a>
            <p>{nameDemo.Content}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default FilmBody;
