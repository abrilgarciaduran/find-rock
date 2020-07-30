import React from 'react'
import ArtistCard from './artist-card.js'

class SimilarArtist extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row centrar margin50">
                    <div className="col-md-12">
                        <h5>Similar Artists</h5>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {this.props.data.slice(0, 4).map((artist, i) => {
                        return (
                            <ArtistCard
                                imagen={artist.image[3]["#text"]}
                                titulo={artist.name}
                                key={i}
                            />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default SimilarArtist