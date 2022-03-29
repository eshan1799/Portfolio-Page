import React from "react";
import { Arrow } from "./index/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
    var settings = {
      arrows: true,
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
            <img className="projectImage" src="./assets/img/Projects/3X.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                3X
              </h3>
              <p className="projectDescription">
                A web-based virtual trading app - where users can experience market trading without the risk.
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
                    Protected server routes
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

        {/* Notion Dictionary API */}
        <div id="grey" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./assets/img/Projects/NotionDictionary.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Notion Dictionary
              </h3>
              <p className="projectDescription">
                Fetch definitions + synonyms of words and post them to a Notion vocabulary database.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Uses Notion's new API and SDK
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Retrieves dictionary data from an open-source dictionary API
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://github.com/eshan1799/Notion-Dictionary-API" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Trivia Boss */}
        <div id="pink" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./assets/img/Projects/TriviaBoss.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Trivia Boss
              </h3>
              <p className="projectDescription">
                A multiplayer quiz - where players can test their knowledge of different topics.
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
            <img className="projectImage" src="./assets/img/Projects/HabitApp.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Habitapp
              </h3>
              <p className="projectDescription">
                A habit-tracking web application - allows users to manage their habits and promotes self growth.
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

        {/* Github Clone */}
        <div id="darkBlue" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./assets/img/Projects/GithubClone.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Github Clone
              </h3>
              <p className="projectDescription">
                A Github clone - displays a list of user's repositories and repository info.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Search Github users
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    View user repo info
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://github.com/eshan1799/Github-Repo-Page" className="buttons" target="_blank">
                  Visit Project
                </a>
                <a href="https://github.com/eshan1799/Github-Repo-Page" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* BAGEBlog */}
        <div id="babyPink" className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./assets/img/Projects/BAGEBlog.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">
                Bage Blog
              </h3>
              <p className="projectDescription">
                A blog site - where users can post, comment on and react to anonymous entries.
              </p>
              <ul>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Built using a RESTful API and the Express.js framework
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Users can add optional GIFs to posts 
                  </span>
                </li>
                <li className="projectPointers">
                  <Arrow />
                  <span className="bulletPointArrow">
                    Search through entries by title, text or #tag
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <a href="https://github.com/eshan1799/BAGE-Blog" className="buttons" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </section>
        </div>
      </Slider>
      </div>
    );
}