
import PropTypes from "prop-types";

function CharacterTarjet({ character }) {
  return (
    <li className="card">
      <img
        src={character.image}
        alt={character.name}
      />

      <h2>{character.name}</h2>

      <p>
        {character.species} - {character.status}
      </p>
    </li>
  );
}
CharacterTarjet.PropTypes = {
        image:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
      }
export default CharacterTarjet
