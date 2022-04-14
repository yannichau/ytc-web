import React from "react";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import axios from "axios";

import Image from 'react-bootstrap/Image'
import Markdown from 'markdown-to-jsx';
import Caption from './MD_Caption';

import load_image from '../images/loading.gif';

import PageTitle from "../components/PageTitle";

import './../blogs/BlogImport.css';

function MDImport({ title, id }) {

    const [md, setMD] = useState("");
    //const { search } = useLocation();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`https://ytc-web.herokuapp.com/api/blogposts/${id}`);
            setMD(res.data.markdown);
            //console.log("search");
            //console.log(md);
        };

        fetchPost();

        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, [title, id, md]);

    const myH1 = ({ children, ...props }) => (
        <div>
            <h1 {...props} class="cust-title mt-3 mb-3 display-4">{children}</h1>
        </div>
    );

    const myH2 = ({ children, ...props }) => (
        <div>
            <br class="mt-3"></br>
            <h2 {...props} class="cust-h3 mt-3 mb-6 display-5">{children}</h2>
        </div>
    );

    const myH3 = ({ children, ...props }) => (
        <div>
            <h3 {...props} class="cust-h4 mb-3 mt-5 display-6">{children}</h3>
        </div>
    );

    const myH4 = ({ children, ...props }) => (
        <div>
            <h4 {...props} class="mt-4">{children}</h4>
        </div>
    );

    const myP = ({ children, ...props }) => (
        <p class="cust mt-3 mb-3" {...props}>
            {children}
        </p>
    );

    const myLi = ({ children, ...props }) => (
        <li class="cust" {...props}>
            {children}
        </li>
    );


    const myImage = ({ children, ...props }) => (
        <div class="mt-3" style={{ display: 'flex', justifyContent: 'center' }} class="justify-content-md-center" {...props}>
            <Image src={props.src} alt="Photo" fluid />
        </div >
    );

    const myA = ({ children, ...props }) => (
        <a class="cust text-dark" {...props}>
            {children}
        </a>
    );

    const myTr = ({ children, ...props }) => (
        <tr class="cust-tr" {...props}>
            {children}
        </tr>
    );

    const myTd = ({ children, ...props }) => (
        <td class="cust text-dark" {...props} style={{ padding: "5px", border: "1px solid", borderColor:"#f2f2f2" }}>
            {children}
        </td>
    );

    const myTh = ({ children, ...props }) => (
        <td class="cust text-dark" {...props} style={{ padding: "5px", fontWeight: "bold", border: "1px solid", borderColor:"#f2f2f2" }}>
            {children}
        </td>
    );

    const myTable = ({ children, ...props }) => (
        <center>
            <table {...props}>
                {children}
            </table>
        </center>
    );

    const myBlockquote = ({ children, ...props }) => (
        <div class="mt-3 mb-3 display-6" style={{ display: 'flex', justifyContent: 'center' }} {...props}>
            {children}
        </div>
    );


    return (
        <div>
            <PageTitle title={`Blog | ${title}`} />
            {md ? (
                <div style={{ display: 'flex', justifyContent: 'center' }} class="container d-flex py-4 col-md-10 col-lg-8" >
                    <Markdown options={{
                        wrapper: 'article',
                        overrides: {
                            h1: myH1,
                            h2: myH2,
                            h3: myH3,
                            h4: myH4,
                            img: myImage,
                            p: myP,
                            a: myA,
                            li: myLi,
                            blockquote: myBlockquote, // does not work
                            tr: myTr,
                            th: myTh,
                            td: myTd,
                            table: myTable,
                            Caption: {
                                component: Caption,
                            }
                        }
                    }}
                    >{md}</Markdown>
                    {/* <div className="facebookComment">
                        <div className="title">Comments</div>
                        <div
                            className="fb-comments"
                            data-href="localhost:3000/ytc-web/#/blogs/mogodB/Pretty%20needed%20Chill/61d33d9f69f66a56c65c3486"
                            data-width="100%"
                            data-numposts="5"
                        ></div>
                    </div> */}
                </div >
            ) : (
                <div>
                    <div class="px-10 py-0 text-center">
                        <Image src={load_image} alt="Photo" fluid />
                        <div>Cute image courtesy of <a href="https://dribbble.com/shots/3790348-game-loading" style={{ color: "black", textDecoration: "none" }}>yuanzi0410</a>.</div>
                    </div >
                </div>
            )}
        </div>
    );

}

export default MDImport;