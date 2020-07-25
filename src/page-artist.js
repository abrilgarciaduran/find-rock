import React, { Component } from "react";
import SearchBar from './components/search-bar.js';
import SimilarArtist from './components/similar-artist.js'
import './page-artist.css'


class PageArtist extends Component {
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
                <div className="container">
                    <div className="row centrar">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCrbYYJhIg9mDDSpmQuJtpmjvxK-oZN5q5aQ&usqp=CAU"
                                alt="Gustavo Ceratti"
                                className="pic-artist margin50" />
                            <h2>Gustavo Ceratti</h2>
                            <p>Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de 1959-ibidem, 4 de septiembre de 2014)3​4​5​ fue un músico, cantautor, compositor y productor discográfico argentino. Obtuvo reconocimiento internacional por haber sido el cantante, guitarrista y compositor principal de la banda de rock Soda Stereo. Es considerado junto a Charly García y a Luis Alberto Spinetta uno de los músicos más importantes, populares e influyentes del rock latinoamericano.</p>
                        </div>
                    </div>
                    <div>
                        <SimilarArtist />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default PageArtist;









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