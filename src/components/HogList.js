import React from "react";
import Tile from "./Tile";

function HogList({ hogs, filterGreased, sortHogs }) {
  let filteredHogs = hogs.filter((hog) => { if (filterGreased) { return hog.greased } else { return true } });
  if (sortHogs != "none") {
    filteredHogs = filteredHogs.sort( (sortHogs === "name" ? sortName : sortWeight) );
  }
  const hogList = filteredHogs.map((hog) => { return <Tile key={hog.name} hog={hog} /> });

  function sortName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function sortWeight(a, b) {
    return a.weight - b.weight;
  }

  return (
    <div className="ui grid container">
      {hogList}
    </div>
  );
}

export default HogList;