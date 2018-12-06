import React, { Component} from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
        <div className="jumbotron">
            <h1>PluralSight Administration
                <p>React, Redux, and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </h1>
        </div>
        );
    }
}

export default HomePage;