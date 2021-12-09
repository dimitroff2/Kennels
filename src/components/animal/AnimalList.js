
import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { useNavigate } from "react-router-dom"




export const AnimalList = () => {
    const { getAnimals, animals } = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)
    const {customers, getCustomers} = useContext(CustomerContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    const navigate = useNavigate()

    return (
        <>
            <h1>Animals</h1>
            <button onClick={() => {navigate("create")}}>Add Animal </button>
            <button onClick ={() => {navigate("/animals/create")}}>Make Reservation</button>
            <div className="animals">
                {
                    animals.map(animal => {
                      console.log(animal)
                      const owner = customers.find(c => c.id === +animal.customerId)
                      const clinic = locations.find(c => c.id === +animal.locationId)
                        return <Animal key={animal.id} 
                        location={clinic}
                        customer={owner}
                        animal={animal} />
                    })
                }
            </div>
        </>
    )
}
