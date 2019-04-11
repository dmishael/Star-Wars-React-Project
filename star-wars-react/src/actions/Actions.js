import { FETCH_POSTS } from "./Types";

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

export const fetchData = () => dispatch => {
    fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    .then(console.log(data))
    );
};
