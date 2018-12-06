import React, { PropTypes, Component } from 'react';
import Header from '../components/common/Header';

class App extends Component {
    render () {
        const { children } = this.props;
        return (
            <div className="container-fluid">
            <Header />
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;