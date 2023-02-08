import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Values from './components/Values/Values'

const defaultValues = [
  {
    name: "Mr.White",
    counter: 1,
  }, {
    name: "Undercover",
    counter: 2,
  } , {
    name: "Citizen",
    counter: 5,
  }
]

// https://randomhidden.codictados.com/

export const GlobalContext = new createContext(defaultValues);

function App() {

  const [list, setList] = useState(defaultValues);
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <GlobalContext.Provider value={{list, setList, start, setStart}}>
        <header className='App-header'>
          <h1>Who kill Mr.White?</h1>
        </header>
        <main className='App-main'>
          {!start && <Form/>}
          <Values/>
        </main>
        <footer className='App-footer'>
          <div className="social">
            <p>Síguenos en:</p>
            <div className="links">
              <p>Twitter</p>
              <span>|</span>
              <p>Facebook</p>
              <span>|</span>
              <p>Instagram</p>
              <span>|</span>
              <p>TikTok</p>
            </div>
          </div>
          <p className="copyright">Copyright Who kill Mr.White © 2023</p>
        </footer>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
