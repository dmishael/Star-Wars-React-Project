import React, { Component } from 'react'
import axios from 'axios'

class TagForm extends Component {
  state = {
    name: "",
    gender: "",
    homeworld: "",
    vehicle: "",
    id: "",
    tag: []
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`/api/items/person/${id}`).then(res => {
      console.log(res.data);

      console.log("local");
      this.setState({
        name: res.data.name,
        gender: res.data.gender,
        homeworld: res.data.homeworld,
        id: id,
        tag: {...res.data.tags}
      });
    });
  }

  handleChange = event => {
    const newTag = { ...this.state.tag };
    newTag[event.target.name] = event.target.value;
    this.setState({ tag: newTag });
  };

  handleSubmit = event => {
    event.preventDefault();
    const input = this.state.tag;
    const objectId = this.props.match.params.id;
    console.log(input);
    axios
      .post(`/api/items//person/${objectId}/tag`, input)
      .then(this.props.history.goBack());
  };

  render() {
      let personWithTags = this.state.tag ? (
        //   console.log(this.state.tag)
        <div>
          <h4>{this.state.name}</h4>
          <h4>{this.state.gender}</h4>
          <h4>{this.state.homeworld}</h4>
          
        </div>
      ) : (
        <div />
      );
      
    return (
      <div>
        <div>
         
          <h4>{personWithTags}</h4>
         
                       
                        

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="tag"
              name="message"
              value={this.state.tag.message}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default TagForm