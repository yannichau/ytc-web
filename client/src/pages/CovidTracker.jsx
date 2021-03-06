import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import SquircleBox from '../components/SquircleBox';
import GeoChartWrapper from '../covid_tracker/worldmap';
import LineChartWrapper from '../covid_tracker/LineChart';

import { useState } from 'react';
import { useEffect } from 'react';

import DataLoading from '../components/DataLoading';

import image_7 from "../images/jaywalking/edited-1054755.webp";

import './CovidTracker.css';

function CovidPage({ coviddata }) {

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if (coviddata) {
            setLoaded(true);
        } else {
            setLoaded(false);
        }
    }, [coviddata])

    return (
        <main>
            <PageTitle title="Coronavirus Tracker" />
            <TitleBanner
                title="Coronavirus Tracker 😷"
                description="My newest weekend project: the latest data for coronavirus, grabbed from Our World in Data."
                image = {image_7}
            />

            {loaded ? (
                <div>
                    <div className="align-items-md-stretch mt-4">
                        <GeoChartWrapper import_covid={coviddata} />
                    </div>

                    <div className="container align-items-md-stretch mt-4">
                        <LineChartWrapper import_covid={coviddata} />
                    </div>
                </div>
            ) : (
                <div className="container py-4">
                    <DataLoading className="mt-4"/>
                </div>
            )}

            <div className="container py-4 col-md-10">
                <div className="row align-items-md-stretch justify-content-center">
                    <div className="col-md-6 mt-4">
                        <SquircleBox
                            title="The Indicators"
                            appearance="teal"
                            content={
                                <div>
                                    <p>
                                        The dataset is maintained by <a href="https://ourworldindata.org/coronavirus" className="text-reset">Our World in Data</a> 
                                        and is fetched from a <a href="https://covid.ourworldindata.org/data/owid-covid-data.json" className="text-reset">JSON data source</a>. 
                                        More details of the dataset indicators are available on their 
                                        <a href="https://github.com/owid/covid-19-data/tree/master/public/data" className="text-reset">COVID-19 Data GitHub Repository</a>. 
                                        The team deserves a great amount of respect and appreciation, 
                                        as a lot of effort is spent to extract data (sometimes manually) from a number of reputable sources, 
                                        such as the WHO, European CDC, and other national health agencies, making the data available in such an accessible manner.
                                    </p>
                                    <p>
                                        In the world map above, a country filled in <b>black</b> indicates that relevant data is not available. 
                                        This highlights the difficulties the "Our World in Data" team faces, 
                                        as not all national health agencies make coronavirus data available in a complete and transparent manner. 
                                        Sometimes, the data collection interval also varies, so it might be helpful to choose another date on the map above.
                                    </p>
                                    <p>
                                        Projects of this nature can certainly allow the public to assess the severity of coronavirus in a more accessible and visual manner. 
                                        I hope you enjoy this tool, and find some use out of this.
                                    </p>
                                </div>
                            }
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <SquircleBox
                            title="About Coronavirus Tracker"
                            appearance="dark"
                            content={
                                <div>
                                    <p>
                                        This project is built with D3.js (and of course React, HTML, CSS....). D3 is a very useful tool 
                                        for producing interactive data visualisations on the web, and I am currently in the process of learning how to use it. 
                                        I do plan to learn more about it, and utilise it for my future projects. 
                                        In the very near future, I will also clean the code up a bit, particularly to avoid re-grabbing data from thhe site upon loading my website each time. 
                                        This will likely involve some MERN (MongoDB, Express, React, Node) database tricks which I'm currently experimenting with.
                                    </p>
                                    <p>
                                        This project is heavily inspired by a <a href="https://www.youtube.com/watch?v=gGORNzKIXL4&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=14" className="text-reset">YouTube tutorial by The Muratorium</a> and
                                         for that I must thank muratkemaldar for the extremely useful tutorial
                                        , which provided an excellent launchpad for me to explore the quirks of working with JSON API's and D3.js!
                                    </p>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </main>
    );

}

export default CovidPage;