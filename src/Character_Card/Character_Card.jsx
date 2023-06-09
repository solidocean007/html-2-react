import "./character_card.css";

const Character_Card = ({
  name,
  skillset,
  votes,
  imageUrl,
  background,
  nickName,
}) => {
  console.log(name);
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={imageUrl} alt={name} />
      <p>{background}</p>
    </div>
  );
};

export default Character_Card;
