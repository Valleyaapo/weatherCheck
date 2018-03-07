import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCity } from './cities';

class TextInput extends Component {

    updateCity(input) {
        const city = input.value
        let currentTime = new Date()
        currentTime = currentTime.toString()
        const props = this.props
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=54b6cfa9eb012ea01dac879aeb964d4b`;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            props.dispatch(showCity({
                name: myJson.name,
                temp: myJson.main.temp,
                time: currentTime
            }))
        })
    }
    render () {
        let input
        return (
            <form onSubmit={e => {e.preventDefault()}}>
                <input ref={node => {input = node}} className="text-input"/>
                <input className="button--save" type="submit" onClick={() => this.updateCity(input)}/>
            </form>
        )
    }
}

export default connect()(TextInput)