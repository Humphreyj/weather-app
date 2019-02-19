import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '3ec8de42bcc8a44738c4c555ced85ebe'

class App extends Component {
  state = {
    city: '',
    country: '',
    humidity: '',
    description: '',
    windSpeed: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault(); //prevents page refresh on submit
    const city = e.target.elements.city.value
    const country = e.target.elements.city.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    //makes a call to the weather API
    const data = await api_call.json()
    //converts the response to JSON
    if(city && country) {//if statement determines whether or not to make API call
          console.log(data);
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            windSpeed: data.wind.speed
          }) //setState on success 
    }else{
      this.setState({
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      windSpeed: '',
      error: 'Please enter a location...'
  })//setState on error

    }//if else state statement
  }//getWeather function ends
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header/>
          <Form getWeather={this.getWeather} />
          <Weather
          temp={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          windSpeed={this.state.windSpeed}
          error={this.state.error}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
