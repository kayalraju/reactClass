import React, { useState } from 'react'

export const Example2 = () => {
    const [company,setCompany]=useState("TATA")
    const [carName,setcarName]=useState("NANO")
    const [year,setYear]=useState("2010")
  return (
    <div>
        
      <h1>use state hooks</h1>

      {/* company name is TATA and car name NANO market intro... 2010 */}

    <h2>company name is {company} and car name is {carName} market intro... {year}</h2>


        
        </div>
  )
}
