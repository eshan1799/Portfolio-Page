import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
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
      <div className="flex">
      <Slider {...settings}>
        <div>
          <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 1
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 2
              </Card.Text>
            </Card.Body>
            </Card>
        </div>
        <div>
        <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 3
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 4
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 5
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className="skillsCards shadow-sm p-4 bg-white rounded">
            <Card.Body 
            className="centreFlexColumn"
            >
              <div className="skillsIcons">
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                </svg>
              </div>
              <Card.Title className="orange">
                Front-end
              </Card.Title>
              <Card.Text>
                Slide 6
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Slider>
      </div>
    );
}