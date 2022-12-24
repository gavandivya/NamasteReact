import React from "react";
import { Outlet } from "react-router-dom"
import UserContext from "../context/UserContext.js";

class AboutUsComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent constructor() ");
    }

    componentDidMount() {
        console.log("Parent componentDidMount()  ");
    }

    componentDidUpdate() {
        console.log("Parent componentDidUpdate() ");
    }

    render() {
        console.log("Parent render() ");
        return <UserContext.Consumer>{
            ({ email, setEmail }) => {
                return <div className="container text-center text-white">
                    <h2 className="m-4">About Us</h2>
                    <h5 className="mt-2 mb-4">We are team of 100 members who joined Namaste React and feels it was the best decision of our life!</h5>
                    <span>Context - {email}</span>
                    <button onClick={() => setEmail("aboutUs@gmail.com")}>Update</button>
                    <Outlet />
                </div>
            }
        }
        </UserContext.Consumer>
    }
}

export default AboutUsComponent;