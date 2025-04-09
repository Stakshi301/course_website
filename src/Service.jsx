import React from 'react';
import Card from "./Cards"

const Service=()=>(
  <>
    <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <Card 
                        img="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg"
                        title="Software Development"/>
                        <Card 
                        img="https://geekflare.com/wp-content/uploads/2020/03/web-development.jpg"
                        title="Web-app Development"/>
                        <Card 
                        img="https://appsamurai.com/wp-content/uploads/2017/06/indie-mobile-developer.png"
                        title="Mobile-app Development"/>
                        <Card 
                        img="https://www.aalpha.net/wp-content/uploads/2018/11/mobile-apps-hiring-india.jpg"
                        title="Internet Of Things"/>
                        <Card 
                        img="https://business.edx.org/hubfs/Imported_Blog_Media/blog-post-sample-2-1.png"
                        title="Machine Learning"/>
                    </div>
                </div>
            </div>
        </div>
  </>
);

export default Service;