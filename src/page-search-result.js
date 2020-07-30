import React, { Component } from "react";
import SearchBar from './components/search-bar.js';
import SearchResult from './components/search-result.js';

class PageSearchResult extends Component {
    state = {
        busqueda: ""
    };
    componentDidMount() {
        let search = this.props.history.location.search.substr(1).replace("%20", " ")
        this.setState({
            busqueda: search
        })
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    handleChange = e => {
        this.setState({
            busqueda: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <SearchBar onChange={this.handleChange} busqueda={this.state.busqueda} />
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