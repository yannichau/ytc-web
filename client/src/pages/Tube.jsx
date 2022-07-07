import WoodstockTravels from '../travel/Woodstock';

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Image from 'react-bootstrap/Image';

import Figure from 'react-bootstrap/Figure';
import { ytc_links } from '../components/Links';
import SquircleBox from '../components/SquircleBox';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import LoadingGif from '../components/LoadingGIF';

import wales_image from '../images/wales.webp';
import tibet_image from '../images/tibet.webp';
import woodstock from '../images/woodstock.webp';


function TubePage({ stationdata }) {

    const [loaded, setLoaded] = useState(false);
    const [ stationPosts, setStationPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        if (stationdata) {
            setLoaded(true);
            setStationPosts(stationdata);
        }
    }, [search, stationdata]);

    return (
        <main>
            <PageTitle title="Travel" />
            <TitleBanner
                title={<span>Woodstock Travels! <Image
                    height={70}
                    alt="Woodstock"
                    src={woodstock}
                    style={{ marginLeft: "10px" }}
                /></span>}
                description={
                    <span>
                        <p>
                            I recently learnt that Japan has a travel agency for stuffed animals, which appeared very amusing to me.
                            So while I am not ready to splurge large amounts on sending my dolls to travel, this is a cool idea,
                            I was thinking how I could recreate something of a similar nature.
                        </p>
                        <p>
                            Since I am a fan of the Underground, I have decided to bring Woodstock on every station on the tube,
                            which will inject a bit more purpose into my frequent commuting and trainspotting trips.
                            In addition, it will be a great excuse for me to rejuvenate my abandoned photography instagram account,
                            and to learn a bit of vector graphics rendering for the web.
                        </p>
                        <p>
                            So hop on Snoopy's back and whiz through the world's oldest Underground system!
                        </p>
                        <p>
                            <small>
                                SVG map extracted from <a href="https://upload.wikimedia.org/wikipedia/commons/1/13/London_Underground_Overground_DLR_Crossrail_map.svg">Wikipedia</a>.
                                There are currently no images uploaded on this site yet, but meanwhile I have implemented a couple interactive elements on this map
                                (beyond the already useful OSI tooltips and blinking lines in the original file!)
                            </small>
                        </p>
                    </span>
                }
            />
            {loaded ? (
                <WoodstockTravels postdata={stationPosts} />
            ) : (
                <LoadingGif/>
            )
            }
            <div className="container mt-4">
                <SquircleBox
                    appearance="teal"
                    content={
                        <div className="row align-items-center align-content-center">
                            <div className="col-md-7 mt-4">

                                <h2>Training my mind to mind the trains 🚅</h2>
                                <p>
                                    Trains have always been a huge part of my life. As a child I was attracted to Thomas & Friends, but jokes aside, many bits of a railway entice me, whether it be rolling stock design, the timetabling logistics, the sophisticated and evolving signalling systems, and so much more!
                                </p>
                                <h5 className=" mt-4">Tibetan Railway</h5>
                                <p>
                                    As part of my graduation trip I made the world's (distance-wise) longest and (altitude-wise) highest 55-hour sleeper service from Guangzhou/ Canton (廣東廣州) to Tibet Lhasa (西藏拉薩), where I made the first sleeper journey of my life, witnessed the gorgeous landscapes and cityscapes scrolling past my eyes, and interacted with people from diverse cultural landscapes!
                                </p>
                                <h5 className=" mt-4">2019-2020 ICRTS Flagship - Welsh Highlands Heritage Railways Volunteering Trip</h5>
                                <p>
                                    While I do not have a particular attachment to steam railways, a brief weekend of laborious hands-on engineering work such as track-laying and installing electrical mains, as well as working alongside experienced veterans of the industry, was ultimately rewarding and gifted me with new perspectives on the country's railways.
                                </p>
                                <p>
                                    To take a deeper look, have a read at my (hopefully decently written) blogs on medium!
                                </p>
                                <a className="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                            </div>
                            <div className="col-md-5 mt-4">
                                <div className="mb-4">
                                    <Figure>
                                        <Figure.Image
                                            src={wales_image}
                                            fluid rounded
                                        />
                                        <Figure.Caption className="text-light">
                                            All the boys posing with their dirty hands after a day of tracklaying! (Winter 2019, Ffestiniog and Welsh Highland Railways Volunteering Trip)
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                                <div className="mb-4">
                                    <Figure>
                                        <Figure.Image
                                            src={tibet_image}
                                            fluid rounded
                                        />
                                        <Figure.Caption className="text-light">
                                            Aboard the 55-hour sleeper serivce to Lhasa! (Summer 2019, Graduation Trip with 7 classmates)
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </main>
    );
}

export default TubePage;