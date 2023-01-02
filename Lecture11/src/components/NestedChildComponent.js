import React from 'react';
class NestedChildComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.test);
        console.log("NestedChildComponent constructor() - " + this.props.test);
    }

    componentDidMount() {
        console.log("NestedChildComponent componentDidMount() -  " + this.props.test);
    }

    componentDidUpdate() {
        console.log("NestedChildComponent componentDidUpdate() - " + this.props.test);
    }

    render() {
        console.log("NestedChildComponent render() - " + this.props.test);
        return <p>I will be displayed {this.props.test}</p>
    }
}
export default NestedChildComponent;