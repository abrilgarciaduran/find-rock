import React, { Component } from "react";
import ArtistCard from './artist-card.js';
import Loading from './loading.js';
import Error from './error.js';

class SearchResult extends Component {
    state = {
        loading: false,
        error: null,
        data: {
            similarartists: {
                artist: []
            }
        }
    }
    componentWillReceiveProps(e) {
        let query = e.busqueda;
        this.fetchData('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + query + '&api_key=c89dddf64b4de3bfbad80ab13ff1a1b2&format=json')
    }

    fetchData = async url => {
        this.setState({
            loading: true
        })
        try {
            const response = await fetch(url);
            const data = await response.json();
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
                {this.state.loading && <Loading />}
                {this.state.error && <Error errorMessage={this.state.errorMessage} />}
                <div className="container">
                    <div className="row">
                        {this.state.data.similarartists.artist.map((artista, i) => {
                            return <ArtistCard titulo={artista.name} imagen={artista.image[2]["#text"]} key={i} />
                        })}
                    </div>
                    <h1>{this.props.busqueda}</h1>
                </div>
            </React.Fragment>
        )
    }
}


export default SearchResult;









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