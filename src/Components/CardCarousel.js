import React from "react";
import { Arrow } from "./index/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };

    return (
      <div className="centreProjects">
      <Slider {...settings}>
        
        {/* 3X */}
        <div id="blue" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./img/Projects/3X.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                3X
              </h3>
              <p className="projectDescription">
                A web-based virtual trading app, to experience market trading without the risk.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Login page
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Secure server routes
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Real-time market data
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://3x.netlify.app/" className="buttons" target="_blank">
                  Visit Project
                </a>
                <a href="https://github.com/eshan1799/lap4project-3x" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Trivia Boss */}
        <div id="pink" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./img/Projects/TriviaBoss.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Trivia Boss
              </h3>
              <p className="projectDescription">
                A multiplayer quiz, where players can test their knowledge of different topics.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Built with React.js
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Retrieve questions from an external API
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Choose topics and difficulty
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://trivia-boss.netlify.app/" className="buttons" target="_blank">
                  Visit Project
                </a>
                <a href="https://github.com/eshan1799/quizzo" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>
        
        {/* Habitapp */}
        <div id="neonBlue" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./img/Projects/HabitApp.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Habitapp
              </h3>
              <p className="projectDescription">
                A habit-tracking web application, that allows users to manage their habits and promotes self growth.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Secure login and register
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    View and add habits in your dashboard
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Calendar view to show more habit info
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://github.com/eshan1799/Habitapp" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>

        <div>
          {/* Slide 4 */}
        </div>
        <div>
          {/* Slide 5 */}
        </div>
        <div>
          {/* Slide 6 */}
        </div>
      </Slider>
      </div>
    );
}