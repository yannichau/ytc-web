import React, { Component } from "react";
import MDImport from "./MDImport";
import SocialMediaShare from "../components/SocialMediaShare";

import FaceBookComment from "./FacebookComment";

class MDImportWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            id: "",
            url: "",
        };
    }

    componentDidMount() {
        // Decoding from parameters passed from router
        let title = decodeURIComponent(this.props.match.params.title);
        const id = decodeURIComponent(this.props.match.params._id);
        const title_url = title.replace(/ /g, "%20");
        const url = "https://cluelesselectrostar.github.io/ytc-web/#/blogs/mogodB/" + title_url + "/" + id;
        this.setState({
            title: title,
            id: id,
            url: url
        })
        console.log("title");
        console.log(title);
        console.log("id");
        console.log(id);
        console.log("url");
        console.log(url);
    }

    tryRequire = (path) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };

    render() {
        return (
            <div>
                <div class="container col-md-10 col-lg-8 cust-title mt-3 mb-3 display-4">
                    <SocialMediaShare link={this.props.location.pathname} />
                </div>
                <MDImport title={this.state.title} id={this.state.id} />
                <FaceBookComment url={this.state.url}/>
            </div>
        );
    }
}

export default MDImportWrapper;