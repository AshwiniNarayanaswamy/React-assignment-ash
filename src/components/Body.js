import { Link } from "react-router-dom";
import React,{useState , useEffect} from 'react';
import AllUserData from "./AllUserData";
import Shimmer from "./Shimmer.js"

// function filterData(searchText,restaurants) { 
//     return (restaurants.filter((restaurant) => restaurant.name.includes(searchText)));
// }

const Body = () => { 
// const [ searchText,setSearchText ] = useState("");
// const [ restaurants,setrestaurants] = useState(RestaurantData);

const [ AllUser, setallUserData] = useState([]);

useEffect(() => {
    getAllUsersData();
},[]);

async function getAllUsersData(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsondata = await data.json();
    console.log(jsondata);
    setallUserData(jsondata);
}

return (
 <>
{AllUserData ? (
<div className="Userdata">
{ AllUser.map((userdata) => {
    return (
        <Link
        to={"/userprofile/" + userdata.id}
        key={userdata.id} className="userlinks"
      >
    <AllUserData {...userdata } key={userdata.id} />
    </Link>);
})} 
</div>
) : (
   
    <p>Loading...</p>
  )}
</>
); 
};
export default Body;