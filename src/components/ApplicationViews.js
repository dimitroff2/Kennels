import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
 import { LocationProvider } from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"
// import { EmployeeProvider } from "./employee/EmployeeProvider"
// import {EmployeeList} from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import {AnimalDetail} from "./animal/AnimalDetails"


export const ApplicationViews = () => {
    return (
    
      <AnimalProvider>
   <LocationProvider>
      <CustomerProvider>
         <Routes>
           <Route path="/" element={<Home />} />
              <Route path="animals/*" element={<AnimalList />} />
              <Route path="animals/create/*" element={<AnimalForm />} />
              <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />
              {/* <Route path="customers/*" element={<CustomerList />} /> */}
              {/* <Route path="employees/*" element={<EmployeeList />} /> */}
              {/* <Route path="employees/create/*" element={<EmployeeForm />} /> */}
              {/* <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} /> */}

               <Route path="locations/*" element={<LocationList />} /> 




           </Routes>
       </CustomerProvider>
    </LocationProvider>
 </AnimalProvider>


   
        
    )
    
}
    
