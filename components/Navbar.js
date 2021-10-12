import requests from "../utils/requests";


const Navbar = () => {
    return (
        <nav>
            <div>
                {/* Object.entries() returns an array whose elements are arrays corresponding to the enumerable 
                string-keyed property [key, value] pairs found directly upon object. The ordering of the properties
                is the same as that given by looping over the property values of the object manually. */}
                {/* This part is mapping through the requests to receive the key and value, here the value is being destructured {} 
                to receive the title and url from the requests.js page */}
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2>{ title }</h2>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;
