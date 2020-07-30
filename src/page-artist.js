import React, { Component } from "react";
import SearchBar from './components/search-bar.js';
import SimilarArtist from './components/similar-artist.js'
import Loading from './components/loading.js';
import Error from './components/error.js';
import { Link } from 'react-router-dom'
import logo from "./logo.svg";
import './page-artist.css'


class PageArtist extends Component {
    state = {
        busqueda: '',
        data: {
            artist: {
                image: [
                    { "#text": "" },
                    { "#text": "" },
                    { "#text": "" },
                    { "#text": "" },
                    { "#text": "" }
                ],
                bio: {
                    summary: ""
                },
                similar: {
                    artist: [
                        {
                            name: "",
                            url: "",
                            image: [
                                { "#text": "" },
                                { "#text": "" },
                                { "#text": "" },
                                { "#text": "" },
                                { "#text": "" }
                            ]
                        }
                    ]
                }
            }
        }
    };
    changeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchData()
        }
    }
    fetchData = async () => {
        let artista = this.props.history.location.search.substr(1);
        let url =
            "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
            artista +
            "&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json";
        this.setState({
            loading: true,
            error: false
        })
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            if (data.error) {
                this.setState({
                    loading: false,
                    error: true,
                    errorMessage: data.message
                })
            } else {
                this.setState({
                    error: false,
                    data: data,
                    loading: false
                })
            }
        } catch (e) {
            this.setState({
                error: true
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {/* <SearchBar onChange={this.changeHandle} busqueda={this.state.busqueda} /> */}
                <div className="col-md-2">
                    <Link to="/">
                        <img src={logo} alt="" className="logo-barra" />
                    </Link>
                </div>
                {this.state.loading && <Loading />}
                {this.state.error && <Error errorMessage={this.state.errorMessage} />}
                <div className="container">
                    <div className="row centrar">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <img
                                src={this.state.data.artist.image[3]["#text"]}
                                alt="Gustavo Ceratti"
                                className="pic-artist margin50" />
                            <h2>{this.state.data.artist.name}</h2>
                            <p>{this.state.data.artist.bio.summary}</p>
                        </div>
                    </div>
                    <div>
                        <SimilarArtist data={this.state.data.artist.similar.artist} />
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