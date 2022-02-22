import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import './SeasonDisplay.css'

class App extends React.Component {
    //constructor -> good place to do one-time setup
    // constructor(props) {
    //     super(props)
    //     //This is the only time we do direct assignment
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     }
    // }
    //another way to initialize constructor 
    state = { lat: null, errorMessage: '' }

    //componentDidMount -> good place to do data loading
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    //componentDidUpdate -> good place to do more data loading when state/props change
    componentDidUpdate() {

    }

    //componentWillUnmount -> good place to do cleanup(especially for non-React stuff)
    componentWillUnmount() {

    }

    //helper funtion for rendering and avoiding multiple contions on render method
     renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request..." />
    }

    //render -> avoid doing anything besides returning jsx
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  