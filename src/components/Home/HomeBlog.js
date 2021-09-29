import React from 'react'
import { Link } from 'react-router-dom';
import blogsize1 from '../images/blogsize1.png';
import blogsize2 from '../images/blogsize2.png';
import blogsize3 from '../images/blogsize3.png';
import path44 from '../images/Path 44.png'
import HomeBlogCard from './HomeBlogCard';


function HomeBlog() {
    return (
        <div>
            <section className="home-blog-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-blog">
                                <h2>
                                    Check out <span>Latest Blog</span>
                                </h2>
                                <p className="m-0">Get the latest Blog and Information</p>
                                <span className="bottom-line" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center ">
                            <div className="view-blog-btn">
                                <Link to="/blog" className="btn-change6">
                                    View All Blogs
                                    <span>
                                        <i className="fas text-white ml-3 fa-long-arrow-alt-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <HomeBlogCard 
                         blogimg={blogsize1}
                         blogdate="Aug 9, 2021"
                         blogname="Dispelling the Fear of the Unknown: Debunking 8 Myths about
                         Artificial Intelligence"
                         blogpara="History has shown humans tend to antagonize the unfamiliar. From
                         Thomas Edison’s ridiculed light bulb to the Wright Brothers’
                         mocked airplanes, well-meaning innovations are no stranger to
                         skepticism."
                         blogbtn="Read More"
                         blogicon={path44}
                        />
                        <HomeBlogCard 
                         blogimg={blogsize2}
                         blogdate="Aug 15, 2021"
                         blogname="Green Flags Of A Good Company: 6 Signs Your Employer Is For
                         Keeps"
                         blogpara="You spend half of your waking life on it (or sometimes even
                            more), you get to interact with the same set of people 5 days of
                            the week, and it demands your full, undivided dedication and
                            attention. Not to mention you most likely will do this for
                            several years."
                         blogbtn="Read More"
                         blogicon={path44}
                        />

                       <HomeBlogCard 
                         blogimg={blogsize3}
                         blogdate="Aug 20, 2021"
                         blogname="21Green Flags Of A Good Company: 6 Signs Your Employer Is For
                         Keeps"
                         blogpara="You spend half of your waking life on it (or sometimes even
                            more), you get to interact with the same set of people 5 days of
                            the week, and it demands your full, undivided dedication and
                            attention. Not to mention you most likely will do this for
                            several years."
                         blogbtn="Read More"
                         blogicon={path44}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeBlog
