import { Component } from 'react'
import NestedChildComponent from "./NestedChildComponent";

class AboutUsChildComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            login: "Divya",
            company: "IL",
            followers: 0,
            test: "On first child render"
        };
        console.log("Child constructor()");
    }

    async componentDidMount() {
        console.log("Child componentDidMount()");
        // const fetchUrl = await fetch(`https://api.github.com/users/gavandivya`);
        // const result = await fetchUrl.json();
        // console.log(result);
        let getArray = JSON.parse(sessionStorage.getItem("teamData"));
        console.log(getArray[0])
        this.setState({
            login: getArray[0].login,
            company: getArray[0].company,
            followers: getArray[0].followers,
            test: "On 2nd child render"
        })
    }

    componentDidUpdate() {
        console.log("Child componentDidUpdate()");
    }

    render() {
        const { login, company, followers } = this.state;
        console.log("Child render()");
        return <>
            <h5>I am About Us Child which makes API call</h5>
            <h6>Name - {login}</h6>
            <h6>Company - {company}</h6>
            <h6>Followers - {followers}</h6>
            <NestedChildComponent test={this.state.test} />
        </>
    }
}

export default AboutUsChildComponent;