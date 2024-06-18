import React from 'react'
import MovieList from './MovieList';
import {useSelector} from "react-redux";

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  
  
}

