import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="Error">
            <h1> OOP! , SOMETHING WENT WRONG</h1>
            <p> {err.status + ":" + err.statusText}</p>
        </div>
    )
}
export default Error;