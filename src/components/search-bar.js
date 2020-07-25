import React from "react"
import logo from "../logo.svg";
import './search-bar.css'
import { Link } from 'react-router-dom'
class SearchBar extends React.Component {
    state = {
        busqueda: ""
    }
    handleChange = e => {
        this.setState({ busqueda: e.target.value })
        console.log(e.target.value)
    }
    handleClick = e => {
        e.preventDefault()
        console.log(e, e.target, e.target.name)
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name, e.target, e)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Link to="/">
                                <img src={logo} alt="" className="logo-barra" />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <form name="form" className="form-inline" onSubmit={this.handleSubmit}>
                                <div className="form-group mx-sm-3 mb-2">
                                    <input
                                        name="busqueda"
                                        type="text"
                                        className="form-control"
                                        placeholder="Busca una banda"
                                        value={this.props.busqueda}
                                        onChange={this.props.onChange} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                </div>


            </React.Fragment>
        )
    }
}

export default SearchBar