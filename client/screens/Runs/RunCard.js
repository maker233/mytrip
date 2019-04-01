
import React from 'react'
import { Link } from 'react-router-dom'

const CoasterCard = run => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img className="card-img-top" src={run.photo} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{run.name}</h5>
                    <p className="card-text">{run.description}</p>
                    <Link className="btn btn-sm btn-outline-dark" to={`/coasters/${run.._id}`}>Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default CoasterCard