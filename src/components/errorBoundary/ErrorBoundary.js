import {Component} from "react";

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <h2>Something went wrong</h2>
        }

        return this.props.children;
    }
}