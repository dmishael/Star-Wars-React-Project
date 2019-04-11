import React, { Component } from 'react'
import {fetchData} from '../actions/Actions'
import PropTypes from "prop-types";
import {connect} from 'react-redux';


export class Home extends Component {

componentWillMount () {
  this.props.fetchData()
  // .then(console.log(this.props.data))
}

  render() {
    const dataItems = this.props.data.map(data => (
      <div key={data.id}>
      <h1>{data.name}</h1>
      </div>
    ))
    return (
      <div>
        <h1>Hello from home page!</h1>
        <h2>{dataItems}</h2>
      </div>
    )
  }
}

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
  data: state.data.items
})


export default connect(mapStateToProps, {fetchData})(Home)


