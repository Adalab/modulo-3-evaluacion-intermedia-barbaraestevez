import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../stylesheets/pokeList.scss";

const PokeList = (props) => {
  const item = props.pokemons.map((pokeItem, id) => {
    return (
      <li key={id}>
        <Pokemon pokeProp={pokeItem} />
      </li>
    );
  });
  PokeList.propTypes = { pokeItem: PropTypes.object };
  return (
    <div>
      <ul className="pokeList">{item}</ul>
    </div>
  );
};

export default PokeList;
