import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <>
      <h1 className="text-center mt-4">Mes joueurs</h1>
      <PlayersList />
    </>
  );
}

export default App;
