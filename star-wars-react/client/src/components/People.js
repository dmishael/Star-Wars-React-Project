import React, { Component } from "react";
import axios from "axios";

class People extends Component {
  state = {
    person: null,
    planet: null,
    vehicle: null
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    axios.get("https://swapi.co/api/people/" + id).then(res => {
      this.setState({
        person: res.data
      });
    });

    // .then(data =>
    //   data.setState({
    //   item: data
    // }))
    console.log(this.state);
  }

  loadPlanet(person) {
    console.log(person._owner.memoizedState.person.homeworld);
    let api = person._owner.memoizedState.person.homeworld;
    console.log(api);
    axios.get(api).then(res => {
      this.setState({
        person: "",
        planet: res.data
      })
    })
    console.log(this.state);
    

  }

  loadVehicle(person) {
    console.log(person._owner.memoizedState.person.vehicle);
    let api = person._owner.memoizedState.person.vehicle;
    console.log(api);
    axios.get(api).then(res => {
      this.setState({
        person: "",
        planet: res.data
      })
    })
    console.log(this.state);

  }

  render() {
    
    const person = this.state.person ? (
      <div>
        <h4>{this.state.person.name}</h4>
      </div>
    ) : (
      <div />
    );

    const planet = this.state.planet ? (
      <div>
        <h4>{this.state.planet.name}</h4>
      </div>
    ) : (
      <div />
    )

    console.log(person);

    return (
      <div>
        <div>
          <h1>{person}</h1>
          <h1>{planet}</h1>

          {/* <button onClick={this.loadPlanet.bind(person)}>homeworld</button> */}
          <button value={person} onClick={() => this.loadPlanet(person)}>
            homeworld
          </button>

          <button value={person} onClick={() => this.loadVehicle(person)}>
            vehicle
          </button>

          
        </div>
      </div>
    );
  }
}

export default People;
