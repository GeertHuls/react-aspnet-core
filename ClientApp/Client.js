import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';

import FullPage from "./Components/common/FullPage";

ReactDOM.render(
    <Router history={browserHistory}>
        <FullPage />
    </Router>,
    document.getElementById("root")
);