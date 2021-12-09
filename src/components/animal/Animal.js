import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const Animal = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.breed}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="customer__name">{customer.name}</div>
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
          <div className="location__name">{location.name}</div>
        
        
    </section>
)