import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

    return (
      <div className="centreProjects">
      <Slider {...settings}>
        <div className="projectBlocks">
          <section className="projects">
            <img className="projectImage" src="./img/Projects/3X.png"></img>
            <div className="projectInfo">
              <h3 className="projectTitle">3X</h3>
              <p className="projectDescription">A web-based virtual trading app, to experience market trading without the risk.</p>
              <ul>
                <li className="projectPointers">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                  <span className="bulletPointArrow">
                    Login page
                  </span>
                </li>
                <li className="projectPointers">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                  <span className="bulletPointArrow">
                    Secure server routes
                  </span>
                </li>
                <li className="projectPointers">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                  <span className="bulletPointArrow">
                    Real-time market data
                  </span>
                </li>
              </ul>
              <div className="projectButtons">
                <button className="buttons">
                  Visit Project
                </button>
                <button className="buttons">
                  Github
                </button>
              </div>
            </div>
          </section>
        </div>
        <div>
          {/* Slide 2 */}
        </div>
        <div>
          {/* Slide 3 */}
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