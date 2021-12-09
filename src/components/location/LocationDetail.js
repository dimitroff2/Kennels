// import React, { useContext, useState } from "react"
// import { LocationContext} from "./LocationProvider"
// import "./Location.css"
// import { useParams } from "react-router-dom"

// export const LocationDetail = () => {
//   const { getLocationById } = useContext(LocationContext)

// 	const [location, setLocation] = useState({})

// 	const {locationId} = useParams();
	

//   useEffect(() => {
//     console.log("useEffect", locationId)
//     getLocationById(locationId)
//     .then((response) => {
//         setLocation(response)
//     })
//     }, []
//     )

//     return (
//         <section className="location">
//           <h3 className="animal__name">{location.name}</h3>
//           <div className="animal__breed">{location.address}</div>
//           {/* What's up with the question mark???? See below.*/}
          
//         </section>
//       )
//     }