import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useRef } from 'react';

import BlogPostList from "../components/BlogPostList"; //MongoDB
// import GetBlogs from '../blogs/HTMLGetBlogs'; // Static HTML
// import GetMDTest from '../blogs/GetMDTest'; // Markdown Test

import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import LoadingGif from "../components/LoadingGIF";
import { ytc_links } from '../components/Links';
import SquircleBox from '../components/SquircleBox';
import BouncyArrow from "../components/BouncyArrow";

import Image from 'react-bootstrap/Image';
import skatepark_image from '../images/skatepark.webp';
import streetskate_image from '../images/streetskate.webp';
import image_1 from "../images/jaywalking/edited-1054311.webp";
import image_2 from "../images/jaywalking/edited-1054329.webp";
import image_3 from "../images/jaywalking/edited-1054347.webp";
import image_4 from "../images/jaywalking/edited-1054516.webp";
import image_5 from "../images/jaywalking/edited-1054537.webp";
import image_6 from "../images/jaywalking/edited-1054607.webp";
import image_7 from "../images/jaywalking/edited-1054755.webp";


function BlogsPage({ blogdata }) {

    const postRef = useRef(null);
    const scrollToPost = () => postRef.current.scrollIntoView({
        behavior: 'smooth'
    })

    const [loaded, setLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        if (blogdata) {
            setLoaded(true);
            setBlogs(blogdata);
        }
    }, [search, setBlogs, blogdata]);

    return (
        <main>
            <PageTitle title="Blogs" />
            <TitleBanner
                title="Blogs ❤️‍🔥"
                description="Documenting my life beyond engineering!"
                image={image_6}
            />
            <div className="container col-md-10 mt-4">
                <SquircleBox
                    appearance="bordered-grey"
                    content={
                        <div>
                            <div className="row align-items-center align-content-center">
                                <div className="col-md-7 mt-4">
                                    <h2>Jaywalking 🚶‍♂️</h2>
                                    <p class="mt-4">
                                        I love travelling and taking photographs, but I like to call it "jaywalking" because half the time I don't even have any idea what I'm looking for. In addition, I tend to capture my best shots at familiar locations, but during the most unexpected moments.
                                    </p>
                                    <p>
                                        Similar to what I've done for trainspotting, I have written a couple blogs on Medium, and several Tibet Travel blogs on Exposure. That said, I am aware of the implications of publishing on a commercialised site, so I am planning to gradually migrate the content and upload the blogs to this site. Fingers crossed for that!
                                    </p>
                                    <a className="btn btn-outline-secondary" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                                </div>
                                <div className="col-md-5 mt-4">
                                    <div id="myCarousel2" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <Image src={image_1} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_2} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_3} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_4} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_5} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_6} fluid height="30%" rounded />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={image_7} fluid height="30%" rounded />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />

                <div onClick={scrollToPost} ref={postRef}>
                    <BouncyArrow />
                </div>
                {loaded ? (
                    <div>
                        <BlogPostList mdPosts={blogs} />
                    </div>
                ) : (
                    <LoadingGif/>
                )}

                <div className="mt-4">
                    <SquircleBox
                        appearance="teal"
                        content={
                            <div>
                                <div className="row align-items-center align-content-center">
                                    <div className="col-md-5 mt-4">
                                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <Image src={skatepark_image} fluid height="30%" rounded />
                                                </div>
                                                <div className="carousel-item">
                                                    <Image src={streetskate_image} fluid height="30%" rounded />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mt-4">
                                        <h2>And now that you've rolled to the bottom, you see my rolling with my feet! 🛼</h2>
                                        <p class="mt-4">
                                            I started roller blading 2 years ago when I first joined the college Skate society in Autumn 2019.
                                            Thanks to the coronavirus pandemic, I've actually spent more time street-skating and aggressive skating in skateparks.
                                            Today, I skate several times a month, and I cannot imagine my life without rolling on skates!
                                        </p>
                                        <p>
                                            Maybe a blog or two about this in the future?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </main>
    );
}

export default BlogsPage;