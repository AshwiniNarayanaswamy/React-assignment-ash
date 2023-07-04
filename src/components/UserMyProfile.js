import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
const UserMyProfile = () => {


    const {resId} = useParams();
    const [ userdata , setuserdata] = useState(null);

  
    useEffect(() => {
        getUserProfile();
      }, []);
    
      async function getUserProfile() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/" + resId);
        const json = await data.json();
        setuserdata(json);
      }  

return !userdata ? (
    <Shimmer />
  ) : (
        
        <div className="usermyprofile">
            <h1>UserId: {userdata.id}</h1>
            <div>Name:{userdata.name} </div>
            <div>Mobile:{userdata.phone} </div>
            <div>Email:{userdata.email} </div>
            <div>Address:{userdata.address?.street} </div>
        </div>
    );
}
export default UserMyProfile;