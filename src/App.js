import './App.css';
import useFetch from './components/useFetch';
import banner from '../src/banner.jpg';

function App() {
  const { data, loading, error, Generate } = useFetch(
    "https://v2.jokeapi.dev/joke/Any");

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  return (
    <div className="App">
      <h1>{data?.setup} : {data?.delivery}</h1>
      <button className="button" onClick={Generate}> Generate</button>
      <img src={banner} alt="logo" width="500" height="300"/>
    </div>
  );
}

export default App;
