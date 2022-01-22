import './App.css';

function AboutMe() {
    return (
        <div id="aboutme">
            <div id="aboutme-profile">
                <div className="profile">Profile</div>
                <h2>Man Parvesh Singh Randhawa</h2>
                <p>CS Graduate Student</p>
                <p>The University Of Texas, Dallas</p>
            </div>
            <div id="aboutme-description">
                <h2>Biography</h2>
                <p>I am a Graduate student in the Department of XYZ at the University of AAA at BBB, graduating in May 2023. I have a Bachelor of Technology degree from CCC</p>
                <p>Previously, I worked at DDD as a Software Engineer, where I worked on delivering central libraries, micro-services and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also an open-source enthusiast and have created projects that were listed in Github trending.</p>
                <p>My interests lie in solving problems related to large-scale distributed software systems.</p>
            </div>
        </div>
    );
}

export default AboutMe;
