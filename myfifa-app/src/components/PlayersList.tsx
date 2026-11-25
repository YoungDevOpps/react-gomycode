import Player from "./Player";
import { players } from "../data/players";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
