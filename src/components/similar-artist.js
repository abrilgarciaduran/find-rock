import React from 'react'
import ArtistCard from './artist-card.js'

class SimilarArtist extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row centrar margin50">
                    <div className="col-md-12">
                        <h5>Similar Artist</h5>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ArtistCard imagen="https://picsum.photos/350" titulo="Test name" />
                    </div>
                    <div className="col-md-3">
                        <ArtistCard imagen="https://picsum.photos/350" titulo="Test name" />
                    </div>
                    <div className="col-md-3">
                        <ArtistCard imagen="https://picsum.photos/350" titulo="Test name" />
                    </div>
                    <div className="col-md-3">
                        <ArtistCard imagen="https://picsum.photos/350" titulo="Test name" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SimilarArtist