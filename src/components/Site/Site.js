import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

import './Site.css';

class Site extends Component {
    static propTypes = {}
    render = () => (
        <div className={Bootstrap["container"]}>
            <h1>Welcome to Home page</h1>
            <div className="height-div"></div>
        </div>
    )
}

export default Site;