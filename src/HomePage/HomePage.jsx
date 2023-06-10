import { Component } from "react";

import Header from "../Header/Header";
import TopCharacters from "../TopCharacters/TopCharacters";
import CharactersPanel from "../CharactersPanel/CharactersPanel";

class HomePage extends Component {
  render() {
    return (
      <body>
        <Header />
        <TopCharacters />
        <CharactersPanel />
      </body>
    );
  }
}

export default HomePage;
