import React from 'react'
import CityCard from './CityCard'
 
const CityList = ({ citylist }) => (
  <div>
    {citylist.map((city, index) => (
      <CityCard key={index} indexof={index} {...city} />
    ))}
  </div>
)
export default CityList