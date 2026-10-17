
import PropTypes from "prop-types";

import CharacterTarjet from "./CharacterTarjet";

function CharacterList({ characters = [] }) {
  return (
    <div className="grid">
      {characters.map((character) => (
        <CharacterTarjet
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}
 CharacterList.PropTypes = {
    
        image:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
      }
export default CharacterList