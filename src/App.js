import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PageSearchResult from "./page-search-result"
import PageHome from './page-home.js'
import PageArtist from './page-artist.js'
import Layout from './components/layout.js'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route exact path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}


export default App;









// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hola mundo! Soy React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }