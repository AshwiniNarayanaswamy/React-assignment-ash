const Shimmer = () => {
    return (
        <div className="Userdata">
        <div class="shimmeruserlist">
        {Array(10).fill("").map((e,index)=> ( <div className="shimmercard" key={index}> 
        </div> )) }
        </div>
        </div>
    );
};
export default Shimmer;