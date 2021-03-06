import axios from 'axios';
import { FETCH_POSTS, ITEMS_LOADING } from "./Types";

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

export const fetchData = () => dispatch => {
  console.log("fetching");
  var proxyURL = "https://secure-temple-38993.herokuapp.com/",
    targetURL = "https://swapi.co/api/people";
  fetch(proxyURL + targetURL)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}