import React, { component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Whoops! Something went wrong...</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry