import {Title} from "./Title.js";

const HeaderComponent = () => {
    return (
    <div className="headcontainer">
         {Title}
         <div className="headertitle">Ash React Assignment</div>
 
         <div className="headrightcontent">
             <ul>
                 <li>Home</li>
                 <li>Sign in</li>
                 <li>Contact US</li>
             </ul>
         </div>
         </div>
    );
};
export default HeaderComponent;