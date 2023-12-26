import React, { useState } from "react";
import "./section.css";
import Experience from "./experience";
import Project from "./project";

const Section = () => {
    const [expHoverState, setExpHoverState] = useState(false);
    const [projHoverState, setProjHoverState] = useState(false);


    return (
        <div id="home" className="content">
            <div className="textContent">
                <div id="about" className="subsection">
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm a senior at Brown University pursuing a degree in Applied Mathematics-Computer Science. I'm interested in solving complex problems using
                        algorithms and parallelism, as well as exploring useful applications of machine learning. My goal is to build software that uses data to solve large scale problems.
                    </p>
                    <p>
                        Over the past few years, I've had the opportunity to participate in research and internships spanning a diverse array of tasks. I've built infrastructure software
                        and tooling for large corporations, done deep learning research in 3D graphics, and developed ML powered web applications for pyschology researchers.
                    </p>
                    <p>
                        When I'm not at the computer, I enjoy Olympic weightlifting, dabbling in jazz saxophone, and playing racket sports.
                    </p>
                </div>
                <div id="experience"  className="subsection">
                    <h1>Experience</h1>
                    <Experience
                        date="May 2023 - Aug 2023"
                        title="Site Reliability Engineer Intern"
                        company="Splunk"
                        description="Built key API, automation, and cryptography components for an internal app, increasing engineer efficiency by 96%. Designed and implementation of an end-to-end
                        encryption system for large files using hybrid RSA + AES encryption."
                        tags={['Golang', 'Python', 'AWS', 'Puppet', 'OpenAPI']}
                        hover={expHoverState}
                        setHover={setExpHoverState}
                    />
                    <Experience
                        date="Jan 2022 - Aug 2022"
                        title="Undergraduate Researcher"
                        company="Brown Visual Computing Lab"
                        description="Implemented novel corruption and evaluation procedures for a transformer-based diffusion model involving beam search and Monte-Carlo Markov Chain methods, improving baseline performance by 12%."
                        tags={['Python', 'PyTorch']}
                        hover={expHoverState}
                        setHover={setExpHoverState}

                    />
                    <Experience
                        date="Jun 2022 - Aug 2022"
                        title="Software Engineer Intern"
                        company="Alarm.com"
                        description="Built a real-time cloud infrastructure monitoring application with a novel 3D interface. Constructed data feeders and backend systems to handle Terraform file parsing, resource updates and client data requests using Pub-Sub
                        framework, allowing for real-time monitoring of 100+ company virtual machinesl."
                        tags={['C#', 'Unity', 'Python', 'SQL', 'Flask', 'Terraform']}
                        hover={expHoverState}
                        setHover={setExpHoverState}

                    />
                    <Experience
                        date="Jan 2021 - Sep 2022"
                        title="Undergraduate Researcher"
                        company="Brown HCI Lab"
                        description="Co-published in CSCW 2022 regarding online communication during COVID-19. Built major components for Sochiatrist, a platform for social media studies, including a search engine
                        and machine learning powered platform for behavior, sentiment, and topic analysis."
                        tags={['Python', 'Flask', 'SQL', 'MongoDB', 'PyTorch']}
                        hover={expHoverState}
                        setHover={setExpHoverState}
                    />
                    <div className='resume-link-wrapper'>
                        <h3>
                            <a className='resume-link' 
                                href={require('../Neil_Xu_Resume.pdf')} 
                                target='_blank'
                                rel="noreferrer">
                                View full resume 
                            </a>
                            <i className="fas fa-arrow-right"></i>
                        </h3>
                    </div>
                    
                </div>
                <div id="projects" className="subsection">
                    <h1>Projects</h1>
                    <Project 
                        title="Hardware and BVH Acclerated Raytracer for Large STL Files"
                        description="Final project for Parallel Computing. Built a Cuda compatible raytracer with a KD-Tree acceleration structure capable of rendering millions of triangles in several seconds."
                        tags={['C++', 'Cuda']}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://github.com/neil2001/apma2822B_final_project_vignesh_neil'}
                    />
                    <Project 
                        title="IP-TCP From Scratch"
                        description="Course project for Networks. Implemented IP and TCP protocols for sending messages and files across lossy networks simulated by UDP sockets."
                        tags={['GoLang']}
                        imageSource= {require("../images/tcp-ip.png")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Vocal Harmonizer"
                        description="Final project for Embedded Systems. Built a microphone that harmonizes with the vocalist using granular synthesis for pitch modulation."
                        tags={['C++', 'Arduino']}
                        imageSource= {require("../images/harmonizer.jpeg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://github.com/neil2001/cs1600-harmonizer/tree/final-submission'}
                    />
                    <Project 
                        title="Weenix OS"
                        description="Course project for Operating Systems. Implemented an OS kernel feature device drivers, a Unix based file system, and virtual memory. Manages userspace addresses, runs user-level code, and services system calls"
                        tags={['C']}
                        imageSource= {require("../images/weenix.png")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Disentangled Learning by Projection"
                        description="Used a projection-based classifier obstruction algorithm called R-LACE to achieve disentangled larning by separating the encoding of distinct features in the latent space of an autoencoder."
                        tags={['Python', 'PyTorch']}
                        imageSource= {require("../images/disentangled_color.jpeg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://github.com/surajK610/disentangled-learning-by-projection'}
                    />
                    <Project 
                        title="Point Cloud Object Classification"
                        description="Classifying various synthetically generated point cloud objects using DNNs."
                        tags={['Python', 'Tensorflow']}
                        imageSource= {require("../images/point_cloud.png")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://github.com/neil2001/3dObjectLearning'}
                    />
                    <Project 
                        title="Desktop World"
                        description="Final project for Graphics. Implemented procedurally generated terrain using gaussian noise, Delauney triangulation, and Graham Scan."
                        tags={['Javascript', 'three.js']}
                        imageSource= {require("../images/desktop-world.gif")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://desktop-world.netlify.app/'}
                    />
                    <Project 
                        title="Air Sax"
                        description="Application that interprets and classifies saxophone finger positions in real time and translates them into sounds."
                        tags={['Python', 'PyTorch', 'OpenCV']}
                        imageSource= {require("../images/saxophone.jpeg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="ThreeDash Business Platform"
                        description="Built a full-stack workflow management application with for a 3D printing startup allowing allowing authenticated users
                        to manage orders, assign tasks, archive completed orders, monitor printer status, and take notes"
                        tags={['React', 'Express', 'SQL', 'Node.js']}
                        imageSource= {require("../images/dashboard.png")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                        link={'https://github.com/neil2001/ThreeDash-business-platform'}
                    />
                    

                </div>
                <div className="textFooter">Thanks for visiting!</div>
            </div>
        </div>
    );
}

export default Section;