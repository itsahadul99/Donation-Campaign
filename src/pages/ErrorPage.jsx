import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
            <h1 className="text-4xl font-bold">Oops !!</h1>
            <Link to='/'><button className="btn btn-primary">Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;