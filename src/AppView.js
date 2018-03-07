import React, { Component } from 'react';
import './App.css';
import SaveButton from './SaveButton'
import TextInput from './TextInput'
import CityList from './CityList';

class AppView extends Component {
    
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Weather App</h1>
                </header>
                <div className="Container">
                    <div className="appH1">Input city to get current forecast</div>
                    <TextInput />
                    <div>
                        Searched City Weather:
                        <p>{this.props.city.name}</p>
                        <p>{this.props.city.temp}&#8451;</p>
                    </div>
                    <SaveButton name="Save" city={this.props.city}/>
                    <div>
                    Here are saved cities
                        <CityList citylist={this.props.cities} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppView