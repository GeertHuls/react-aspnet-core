import React, { Component } from 'react';

import Routes from "../../Routes";
import PageTop from "./PageTop";
import CodeCampMenu from "./CodeCampMenu";
import Footer from "./Footer";

class FullPage extends Component {
    render() {
        return (
            <div>
                <PageTop>
                    <CodeCampMenu />
                </PageTop>
                <Routes />
                <Footer />
            </div>
        );
    }
}

FullPage.defaultProps = {};

export default FullPage;