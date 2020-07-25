import React, { Component } from "react";
import SearchBar from './components/search-bar.js';
import SearchResult from './components/search-result.js';

class PageSearchResult extends Component {
    state = {
        busqueda: ''
    };
    changeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <SearchBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
                <SearchResult busqueda={this.state.busqueda} />
            </React.Fragment>
        )
    }
}


export default PageSearchResult;









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