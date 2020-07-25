import React, { Component } from "react";
import ArtistCard from './artist-card.js';

class SearchResult extends Component {
    state = {
        "artist": [{
            "name": "Allie X",
            "match": "1",
            "url": "https://www.last.fm/music/Allie+X",
            "image": "https://i.pinimg.com/originals/c0/54/d2/c054d28585edf36ce52da196dbb0ac9a.png"
        },
        {
            "name": "Lorde",
            "mbid": "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
            "match": "0.827789",
            "url": "https://www.last.fm/music/Lorde",
            "image": "https://assets.tonica.la/__export/1590010469768/sites/debate/img/2020/05/20/lorde-ofrece-detalles-de-su-nuevo-material_efe.jpg_1359985867.jpg"
        },
        {
            "name": "Billie Eilish",
            "match": "0.811899",
            "url": "https://www.last.fm/music/Billie+Eilish",
            "image": "data:image/jpeg;base64,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"
        }, {
            "name": "Marina",
            "mbid": "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
            "match": "0.648183",
            "url": "https://www.last.fm/music/Marina",
            "image": "https://los40es00.epimg.net/los40/imagenes/2019/08/01/musica/1564647212_567547_1564648072_noticia_normal.jpg"
        }, {
            "name": "BROODS",
            "mbid": "68205c8f-9518-4b49-8df7-bd297da67599",
            "match": "0.573807",
            "url": "https://www.last.fm/music/BROODS",
            "image": "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/c/6/7/0c677dfdd4e8177430fb18050c19c09b.jpg"
        }, {
            "name": "Declan Mckenna",
            "match": "0.525606",
            "url": "https://www.last.fm/music/Declan+Mckenna",
            "image": "https://lastfm.freetls.fastly.net/i/u/770x0/5fc1d48bcd149b178e417ae34c896d83.jpg#5fc1d48bcd149b178e417ae34c896d83"
        }, {
            "name": "Susanne Sundfør",
            "mbid": "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
            "match": "0.463562",
            "url": "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvACqW4fbZdyai7CKvQfqpBncL2T3TUwcvTA&usqp=CAU"
        }, {
            "name": "iamamiwhoami",
            "mbid": "9aaa99df-9383-47df-92af-8bb5e5595815",
            "match": "0.457291",
            "url": "https://www.last.fm/music/iamamiwhoami",
            "image": "https://img.discogs.com/z3hCy3R48UbEjVoRS5_mMiN5GBg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6287680-1415639658-2211.jpeg.jpg"
        }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {this.state.artist.map((artista, i) => {
                            return <ArtistCard titulo={artista.name} imagen={artista.image} key={i} />
                        })}







                        {/* <ArtistCard titulo='Primer componente' imagen='https://picsum.photos/300' />
                        <ArtistCard titulo='Segundo componente' imagen='https://picsum.photos/300' />
                        <ArtistCard titulo='Tercer componente' imagen='https://picsum.photos/300' />
                        <ArtistCard titulo='cuarto componente' imagen='https://picsum.photos/300' /> */}
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