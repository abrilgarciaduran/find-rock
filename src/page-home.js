import React from 'react';
import './page-home.css';
import logo from "./logo.svg";

class PageHome extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/busqueda?" + this.state.busqueda)
    }
    onChange = (e) => {
        this.setState({
            busqueda: e.target.value
        })
    }
    state = {
        busqueda: ""
    }
    render() {
        return (
            <div className="container">
                <div className="row centrado">
                    <div className="col-md-6 centrar">
                        <img src={logo} alt="Logo Find Rock" id="logo" />
                        <form
                            className="form-inline"
                            name="FOrm"
                            onSubmit={this.handleSubmit}
                        >
                            <div className="busqueda">
                                <input
                                    name="busqueda"
                                    type="text"
                                    id="buscar"
                                    value={this.state.busqueda}
                                    placeholder="Busca una banda"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="actions">
                                <button type="submit" className="btng" type="submit">
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