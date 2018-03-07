import React from 'react';
import { connect } from 'react-redux';
import { cityRemoved } from './cities'

function handleClick(props) {
    let cityList =  JSON.parse(localStorage.getItem("citylist"));
    cityList.splice(props.indexof, 1)
    localStorage.setItem("citylist", JSON.stringify(cityList));
    props.dispatch(cityRemoved(cityList))
}
 
const CityCard = (props) => (
  <div className="citycard" onClick={() => handleClick(props)}>
    <p>{props.name}</p>
    <p>{props.temp}&#8451;</p>
    <p>{props.time}</p>
  </div>
)
export default connect()(CityCard)