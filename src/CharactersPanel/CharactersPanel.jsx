import { data } from "../../public/fma-data";
import Character_Card from "../Character_Card/Character_Card"

const CharactersPanel = () => {
  return (
    <section id="character-cards">
      {data.map((info, index) => (
        <Character_Card key={index} {...info}/>
      ))}
    </section>
  );
}

export default CharactersPanel;