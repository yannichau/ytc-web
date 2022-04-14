import Figure from 'react-bootstrap/Figure';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Image from 'react-bootstrap/Image';

import { ytc_links } from '../components/Links';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

import TitleBanner from '../components/TitleBanner';
import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

import wales_image from '../images/wales.webp';
import tibet_image from '../images/tibet.webp';
import bakerloo_image from '../images/bakerlootutorial.webp';
import skatepark_image from '../images/skatepark.webp';
import streetskate_image from '../images/streetskate.webp';

import image_1 from "../images/jaywalking/edited-1054311.webp";
import image_2 from "../images/jaywalking/edited-1054329.webp";
import image_3 from "../images/jaywalking/edited-1054347.webp";
import image_4 from "../images/jaywalking/edited-1054516.webp";
import image_5 from "../images/jaywalking/edited-1054537.webp";
import image_6 from "../images/jaywalking/edited-1054607.webp";
import image_7 from "../images/jaywalking/edited-1054755.webp";

function LifePage() {

    return (<main>

        <PageTitle title="Passions" />
        <TitleBanner
            title="Living my passions ❤️‍🔥"
            description="My life beyond engineering!"
        />

        <div class="container py-4">
            <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                    <Image src={bakerloo_image} height="300px" />
                </Parallax>
            </ParallaxProvider>

            <div class="row align-items-md-stretch g-4">

                <SquircleBox
                    appearance="teal"
                    content={
                        <div class="row align-items-center align-content-center">
                            <div class="col-md-7 mt-4">

                                <h2>Training my mind to mind the trains 🚅</h2>
                                <p>
                                    Trains have always been a huge part of my life. As a child I was attracted to Thomas & Friends, but jokes aside, many bits of a railway entice me, whether it be rolling stock design, the timetabling logistics, the sophisticated and evolving signalling systems, and so much more!
                                </p>
                                <h5 class=" mt-4">Tibetan Railway</h5>
                                <p>
                                    As part of my graduation trip I made the world's (distance-wise) longest and (altitude-wise) highest 55-hour sleeper service from Guangzhou/ Canton (廣東廣州) to Tibet Lhasa (西藏拉薩), where I made the first sleeper journey of my life, witnessed the gorgeous landscapes and cityscapes scrolling past my eyes, and interacted with people from diverse cultural landscapes!
                                </p>
                                <h5 class=" mt-4">2019-2020 ICRTS Flagship - Welsh Highlands Heritage Railways Volunteering Trip</h5>
                                <p>
                                    While I do not have a particular attachment to steam railways, a brief weekend of laborious hands-on engineering work such as track-laying and installing electrical mains, as well as working alongside experienced veterans of the industry, was ultimately rewarding and gifted me with new perspectives on the country's railways.
                                </p>
                                <p>
                                    To take a deeper look, have a read at my (hopefully decently written) blogs on medium!
                                </p>
                                <a class="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                            </div>
                            <div class="col-md-5 mt-4">
                                <div class="mb-4">
                                    <Figure>
                                        <Figure.Image
                                            src={wales_image}
                                            fluid rounded
                                        />
                                        <Figure.Caption class="text-light">
                                            All the boys posing with their dirty hands after a day of tracklaying! (Winter 2019, Ffestiniog and Welsh Highland Railways Volunteering Trip)
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                                <div class="mb-4">
                                    <Figure>
                                        <Figure.Image
                                            src={tibet_image}
                                            fluid rounded
                                        />
                                        <Figure.Caption class="text-light">
                                            Aboard the 55-hour sleeper serivce to Lhasa! (Summer 2019, Graduation Trip with 7 classmates)
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                            </div>
                        </div>
                    }
                />

                <SquircleBox
                    appearance="dark"
                    content={
                        <div>
                            <div class="row align-items-center align-content-center">
                                <div class="col-md-5 mt-4">
                                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <Image src={skatepark_image} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={streetskate_image} fluid height="30%" rounded />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-md-7 mt-4">
                                    <h2>Rolling with my feet 🛼</h2>
                                    <p>
                                        I started rolling skating 2 years ago when I first joined the college Skate society in Autumn 2019. Thanks to the coronavirus pandemic, I've actually spent more time street-skating and aggressive skating in skateparks.
                                    </p>
                                    <p>
                                        Today, I skate several times a month, and I cannot imagine my life without rolling on skates!
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                />

                <SquircleBox
                    appearance="bordered-grey"
                    content={
                        <div>
                            <div class="row align-items-center align-content-center">
                                <div class="col-md-7 mt-4">
                                    <h2>Jaywalking 🚶‍♂️</h2>
                                    <p>
                                        I love travelling and taking photographs, but I like to call it "jaywalking" because half the time I don't even have any idea what I'm looking for. In addition, I tend to capture my best shots at familiar locations, but during the most unexpected moments.
                                    </p>
                                    <p>
                                        Similar to what I've done for trainspotting, I have written a couple blogs on Medium, and several Tibet Travel blogs on Exposure. That said, I am aware of the implications of publishing on a commercialised site, so I am planning to gradually migrate the content and upload the blogs to this site. Fingers crossed for that!
                                    </p>
                                    <a class="btn btn-outline-secondary" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                                </div>
                                <div class="col-md-5 mt-4">
                                    <div id="myCarousel2" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <Image src={image_1} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_2} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_3} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_4} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_5} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_6} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={image_7} fluid height="30%" rounded />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>

        </div>

    </main >);
}

export default LifePage;