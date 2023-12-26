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
                        description="Description of your role and responsibilities."
                        tags={['Golang', 'Python', 'AWS', 'Puppet', 'OpenAPI']}
                        hover={expHoverState}
                        setHover={setExpHoverState}
                    />
                    <Experience
                        date="Jan 2022 - Aug 2022"
                        title="Undergraduate Researcher"
                        company="Brown Visual Computing Lab"
                        description="Description of your role and responsibilities."
                        tags={['C#', 'Unity', 'Python', 'Flask', 'Terraform']}
                        hover={expHoverState}
                        setHover={setExpHoverState}

                    />
                    <Experience
                        date="Jun 2022 - Aug 2022"
                        title="Software Engineer Intern"
                        company="Alarm.com"
                        description="Description of your role and responsibilities."
                        tags={['C#', 'Unity', 'Python', 'Flask', 'Terraform']}
                        hover={expHoverState}
                        setHover={setExpHoverState}

                    />
                    <Experience
                        date="Jan 2021 - Sep 2022"
                        title="Undergraduate Researcher"
                        company="Brown HCI Lab"
                        description="Description of your role and responsibilities."
                        tags={['C#', 'Unity', 'Python', 'Flask', 'Terraform']}
                        hover={expHoverState}
                        setHover={setExpHoverState}
                    />
                
                
                
                </div>
                <div id="projects" className="subsection">
                    <h1>Projects</h1>
                    <Project 
                        title="Hardware and BVH Acclerated Raytracer for Large STL Files"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="IP-TCP From Scratch"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Vocal Harmonizer"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Weenix OS"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Learning Disentangled by Projection"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    <Project 
                        title="Point Cloud Object Classification"
                        description="Final project for Parallel Computing course"
                        tags={[]}
                        imageSource= {require("../images/groot_colored.jpg")}
                        hover={projHoverState}
                        setHover={setProjHoverState}
                    />
                    

                </div>
                <div className="textFooter">Thanks for visiting!</div>
            </div>
        </div>
    );
}

export default Section;