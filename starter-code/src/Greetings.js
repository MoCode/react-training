import React from "react";

const Greetings = props => {
  let mapLang = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };

  let temp = props.lang;

  return (
    <div className="Greeting">
      <p>
        {mapLang[temp]} {props.children}
      </p>
    </div>
  );
};
export default Greetings;
