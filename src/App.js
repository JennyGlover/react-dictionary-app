import Dictionary from "./Dictionary"
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='App-header'>
        👩🏽‍🏫 Dictionary App
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='App-footer'>
         👩🏾‍💻 <a className="open-source"  target="_blanck" href="https://github.com/JennyGlover/react-dictionary-app"> Open-Source</a> Project by Jenny Glover Saunders
        </footer>
      </div>
    </div>
  );
}

export default App;
