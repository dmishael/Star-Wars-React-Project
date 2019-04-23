import React, { Component } from "react";
import axios from "axios";

class People extends Component {
    state = {
        person: {
            name: '',
            birthyear: '',
            gender: '',
            homeworld: '',
        }
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        axios.get("https://swapi.co/api/people/" + id).then(res => {
            this.setState({
                name: res.data.name
            })
        });

        // .then(data =>
        //   data.setState({
        //   item: data
        // }))
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

       
        console.log(person);

        return (
            <div>
                <div>
                    <h1>{person}</h1>
                

                    {/* <button onClick={this.loadPlanet.bind(person)}>homeworld</button> */}
                   

                   


                </div>
            </div>
        );
    }
}

export default People;
