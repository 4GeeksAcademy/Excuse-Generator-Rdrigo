/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["grandma", "rooster", "dog", "driver", "comedian", "Doctor"];
  let action = ["took my", "threw my", "yelled at my", "broke my", " took my"];
  let possession = ["book", "toe", "tang", "shoe"];
  let where = ["on the street", "on the trash", "on the roof", "in the car"];

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    " " +
    subject[Math.floor(Math.random() * subject.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    possession[Math.floor(Math.random() * possession.length)] +
    " " +
    where[Math.floor(Math.random() * where.length)]
  );
};
