import React from 'react';
import './page-home.css';
import logo from "./logo.svg";

class PageHome extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row centrado">
                    <div className="col-md-6 centrar">
                        <img src={logo} alt="Logo Find Rock" id="logo" />
                        <form
                            className="form-inline"
                            name="FOrm"
                        >
                            <div className="busqueda">
                                <input
                                    name="busqueda"
                                    type="text"
                                    id="buscar"
                                    placeholder="Busca una banda"
                                />
                            </div>
                            <div className="actions">
                                <button className="btng" type="submit">
                                    Search Similar Artist
                                </button>
                                <button className="btng">
                                    EscuelaDevRock
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHome