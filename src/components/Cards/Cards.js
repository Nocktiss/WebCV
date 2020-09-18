import React from "react";
import CardItem from "../CardItem";

import "../Cards/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Découvre qui je suis !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              text="Je me présente Anthony 30 ans, en reconversion dans le monde de l'IT."
              label="Développeur Web"
              path="/descriptive"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Mon univers, ma passion, mon poste de travail."
              label="Setup"
              path="/descriptive"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Motivation, Renouveau, Passion, Projet De Vie."
              label="Personnalité"
              path="/descriptive"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Toujours être positif."
              label="Humour"
              path="/descriptive"
            />
            <CardItem
              src="images/img-4.png"
              text="Là où tout a commencé !"
              label="Formation"
              path="/training"
            />
            <CardItem
              src="images/img-6.jpg"
              text="les Start-Up qui ont su me laisser ma chance !"
              label="Expériences"
              path="/experience"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
