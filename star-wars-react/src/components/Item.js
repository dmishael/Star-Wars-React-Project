import React, { Component } from 'react'
import axios from 'axios'




class Item extends Component {

  state = {
    item: null
}

  componentDidMount() {
    let id = this.props.match.params.id
    console.log(id)
    axios.get('https://swapi.co/api/people/' + id)
      .then(res => {
      this.setState({
          item: res.data
        })
      })
      
      // .then(data => 
      //   data.setState({
      //   item: data
      // }))
      console.log(this.state)
    
  }
   
    render() {
    
      const item = this.state.item ? (
        <div>
          <h4>{this.state.item.name}</h4>
        </div>
      ) : (
        <div>Loading item...</div>
      )
     
      return (
        <div>
          <div>
            <h1>{item}</h1>
          </div>
          
          
        </div>
      );
    }
  }



export default Item


