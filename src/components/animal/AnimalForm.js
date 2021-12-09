import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import {  useParams, useNavigate } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [animal, setAnimal] = useState({
      // name: "",
      // breed: "",
      // locationId: "",
      // customerId: "",
    })

    
    const [isLoading, setIsLoading] = useState(true);

    const {animalId} = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
      const newAnimal = { ...animal } 
      newAnimal[event.target.id] = event.target.value
      setAnimal(newAnimal)
    }
    
    const handleSaveAnimal = () => {
      if (parseInt(animal.locationId) === 0 || parseInt(animal.customerId) === 0){
        window.alert("Please select a location")
      } else {
        setIsLoading(true);
        if(animalId){
          updateAnimal({
            id : animal.id,
            name: animal.name,
            locationId: parseInt(animal.locationId),
            customerId: parseInt(animal.customerId)
          })
          .then(() => navigate(`/animals/detail/${animal.id}`))
        } else {
          //Post Add
          addAnimal({
            name: animal.name,
            breed: animal.breed,
            locationId: parseInt(animal.locationId),
            customerId: parseInt(animal.customerId)
          })
          .then(() => navigate("/animals"))
        }
      }
    }

    useEffect(() => {
      getCustomers().then(getLocations).then(() =>{
        if(animalId){
          getAnimalById(animalId)
          .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

   

    return (
      <form className="animalForm">
          <h2 className="animalForm__title">New Animal</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Animal name:</label>
                  <input type="text" id="name" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="Animal name" 
                  defaultValue={animal.name}/>
              </div>
          </fieldset>

          <fieldset>
          <div className="form-group">
            <label htmlFor="Animalbreed"> Breed:</label>
            <input type = "text" id= "breed" name="breed" required className="form-control" 
            placeholder= "Animal Breed"
            onChange={handleControlledInputChange}
            defaultValue={animal.breed} ></input> 


            </div>
              </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue={animal.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange} >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>{l.name} </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select defaultValue={animal.customerId} name="customer" id="customerId" className="form-control" onChange={handleControlledInputChange} >
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
          disabled ={isLoading}
            onClick={event => {
              event.preventDefault(
              handleSaveAnimal()
              )
            }}>
            Save Animal
          </button>
      </form>
    )
}
