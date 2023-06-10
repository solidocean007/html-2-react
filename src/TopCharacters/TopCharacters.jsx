import { data } from "../../public/fma-data";
import "./topCharacters.css";

const voteSort = (dataArray) => {
  return [...dataArray]
    .filter((item) => item.votes >= 0)
    .sort((a, b) => b.votes - a.votes);
};

const TopCharacters = () => {
  const sortedData = voteSort(data).slice(0, 5);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            {["Name", "Skillset", "Votes"].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((char, index) => (
            <tr key={char.name} className={index % 2 === 0 ? "dark" : "light"}>
              {[char.name, char.skillset, char.votes].map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TopCharacters;
