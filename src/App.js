
import getBreeds from "./hooks/getBreeds.js";
import BreedDetail from "./components/bread-details.js";
import './app.css';


export default function App() {
  const { isLoading, breeds } = getBreeds();

  return isLoading ? (
    <p>Data is fetching...</p>
  ) : (
    <div className="app">
      <h1>Zadanie rekrutacyjne</h1>
      <div className="app-container">
      {breeds.map((item, index) => (
        <BreedDetail key={index} breed={item} />
      ))}
      </div>
    
    </div>
  );
}
