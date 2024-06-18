import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector,useDispatch} from "react-redux" 
import { API_END_POINT } from '../utils/constant';
import axios from "axios";
import { setUser } from '../redux/userSlice';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from '../redux/movieSlice';



