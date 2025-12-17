import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            error: null,
        }
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error,
        }
    };

    componentDidCatch(error, info) {
        console.log("Your Error :", error);
        console.log("From this component error is coming:", info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <p>{this.state.error?.message || "Something went wrong"}</p>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary;