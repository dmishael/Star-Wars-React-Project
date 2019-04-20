import React, { Component } from 'react'
import {fetchData} from '../actions/Actions'
// import PropTypes from "prop-types";
import {connect} from 'react-redux';


export class Home extends Component {

componentWillMount () {
  this.props.fetchData()
  // .then(console.log(this.props.data))
}

   
    render() {
      // const postItems = this.props.data.results.map(post => (
      //   <div key={post.id}>
      //     <h3>{post.name}</h3>
      
      //   </div>
      // ))
      // console.log(this.props.data)
      // let item; 
      if (this.props.data.length > 0) {
      var item = this.props.data.map(post => (
        <div key={post.id}>
          <h3>{post.name}</h3>

        </div>
      ))
      console.log(this.props.data)
      }
      return (
        <div>
          <div>
            
          </div>
          <h1>{item}</h1>
          
        </div>
      );
    }
  }

const mapStateToProps = state => ({
  data: state.data.items
})


export default connect(mapStateToProps, {fetchData})(Home)


