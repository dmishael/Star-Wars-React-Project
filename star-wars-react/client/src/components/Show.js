import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class People extends Component {
  state = {
    name: "",
    gender: "",
    homeworld: "",
    vehicle: "",
    id: "",
    tags: [{}]
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    
      console.log(id);
      axios.get(`/api/items/person/${id}`).then(res => {
        // console.log(res.data.tags);
        this.setState({
          name: res.data.name,
          gender: res.data.gender,
          homeworld: res.data.homeworld,
          vehicle: res.data.homeworld,
          id: id,
          tags: res.data.tags
        });
      }).catch(() => {
      axios.get("https://swapi.co/api/people/" + id).then(res => {
        console.log(res.data.name);
        this.setState({
          name: res.data.name,
          gender: res.data.gender,
          homeworld: res.data.homeworld,
          vehicle: res.data.homeworld,
          id: id
        });
      });
    })

    // .then(data =>
    //   data.setState({
    //   item: data
    // }))
    // console.log(this.state);
  }

  loadPlanet(person) {
    console.log(person._owner.memoizedState.person.homeworld);
    let api = person._owner.memoizedState.person.homeworld;
    console.log(api);
    axios.get(api).then(res => {
      this.setState({
        person: "",
        planet: res.data
      });
    });
    console.log(this.state);
  }

  addTag() {
    const input = this.state;
    const id = this.state.id;
    axios
      .post("/api/items/newperson", input)
      .then(this.props.history.push(`/person/${id}/tag`));
  }

  loadVehicle(person) {
    console.log(person._owner.memoizedState.person.vehicle);
    let api = person._owner.memoizedState.person.vehicle;
    console.log(api);
    axios.get(api).then(res => {
      this.setState({
        person: "",
        planet: res.data
      });
    });
    console.log(this.state);
  }

  render() {
    const person = this.state.name ? (
      <div>
        <h4>{this.state.name}</h4>
        <h4>{this.state.gender}</h4>
        <h4>{this.state.homeworld}</h4>
        {this.state.tags.map(tag => (
          <div key={tag._id}>
            <h3>{tag.message}</h3>
          </div>
        ))}
      </div>
    ) : (
      <div />
    );

    // const planet = this.state.planet ? (
    //   <div>
    //     <h4>{this.state.planet.name}</h4>
    //   </div>
    // ) : (
    //   <div />
    // );

    console.log(person);

    return (
      <div>
        <div>
          <h1>{person}</h1>
          {/* <h1>{planet}</h1> */}

          {/* <button onClick={this.loadPlanet.bind(person)}>homeworld</button> */}
          <button value={person} onClick={() => this.loadPlanet(person)}>
            homeworld
          </button>
          {/* <Link to={`/Posts/${posts._id}/Book`}><Button>Sign Up</Button></Link> */}

          <button value={person} onClick={() => this.addTag()}>
            tag
          </button>
        </div>
      </div>
    );
  }
}

export default People;
