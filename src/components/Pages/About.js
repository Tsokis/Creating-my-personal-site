import React from 'react';
import project from '../../../src/images/project.jpg'

const About = () => {
    console.log(project);
    return (
        <section>
            <h3>About page</h3>
            <img src={project} alt="testaki"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque exercitationem ipsam mollitia necessitatibus non obcaecati repellat reprehenderit voluptates? Inventore, iure?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum excepturi minus officia quasi qui recusandae ullam vel veniam voluptate!</p>
        </section>
    )
};

export default About;