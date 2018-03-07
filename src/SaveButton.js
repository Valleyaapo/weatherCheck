import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCity } from './cities';

class SaveButton extends Component {
    handleClick() {
        let city = this.props.city
        this.props.dispatch(addCity(city))
        let cityList = localStorage.getItem("citylist")
        cityList = JSON.parse(cityList)
        if (cityList == null) {
            cityList = []
        }
        cityList.push(city)
        cityList = JSON.stringify(cityList)
        localStorage.setItem("citylist", cityList)
    }

    render () {
        return(
            <button className="button--save" onClick={() => {this.handleClick()}}>Save</button>
        ) 
            
    }
}
SaveButton = connect()(SaveButton)
export default SaveButton
