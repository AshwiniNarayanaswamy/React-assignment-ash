const AllUserData = ({name,email,phone,website,address}) =>{
    return(
        <div className="alluserdata">
            <h1>Name:{name}</h1>
            <h2>MobileNum:{phone}</h2>
            <p>Email: {email}</p>
            <p>website: {website}</p>
            <div className="address">Address:
                <p>Street:{address.street}</p>
                <p>city:{address.city}</p>
                <p>zipcode:{address.zipcode}</p>
            </div>
        </div>

    );
}
export default AllUserData;