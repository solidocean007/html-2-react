import { Component } from "react";

import Header from "./Header/Header";
import TopCharacters from "../TopCharacters/TopCharacters";
import CharactersPanel from "../CharactersPanel/CharactersPanel"


class HomePage extends Component {
  render() {
    return (
      <div className="full-page">
        <Header />
        <TopCharacters />
        <CharactersPanel />
      </div>
    )
  }
}

export default HomePage;
