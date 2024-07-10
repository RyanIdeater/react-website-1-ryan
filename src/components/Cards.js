import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the Epic Match</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/image1.jpg" text="HIGHLIGHTS | Tottenham Hotspur vs Arsenal (0-2) | North London derby delight!" label="Football" path="services" />
            <CardItem src="images/image2.jpg" text="Indonesia wins 8th gold medal in badminton at 2020 Tokyo Games" label="Empty" path="services" />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/image3.jpg" text="ELakers' LeBron James would give up nearly $100M if he decides to end his NBA career this offseason" label="Football" path="services" />
            <CardItem src="images/image4.jpg" text="Chicago Bears vs. Detroit Lions: Live Score, Highlights and Analysis" label="Empty" path="services" />
            <CardItem src="images/image5.jpg" text="Gareth Bale Main golf" label="Empty" path="services" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
