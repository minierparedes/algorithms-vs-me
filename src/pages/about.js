import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

function about() {
    return (
       <Layout>
           <main>
           <h1>THIS IS THE ABOUT PAGE</h1> 
           <p>I am a software engineer with experience in JavaScript and Swift. Recently I created a full-stack project for a client using React.js for the frontend, Node.js & Express, for the server side, and PostgreSQL for the backend. It is a website dedicated to providing five-star restaurant recipes for all. The website has recipes for anyone to be able to follow and cook five-star class meals at home.

From a very young age I have been interested in technologies, how cool and amazing they are. While playing video games I always wondered how they were made and how incredible it would be if I were able to create them. That passion stayed with me and drives me to continue to be a part of the tech industry as a software engineer.

Being able to create programs, small games and be involved with other software engineer is an experience to which I am grateful for. 

Currently I am working on working on a Swift personal project to further familiarize myself with SwiftUI and apple new programing paradigm.

When I am not banging my head on the keyboard or talking to rubber ducky, I love spending time cooking and being with my family. </p>
           <Link to="/">Home</Link>
        </main>
       </Layout>

    )
}

export default about
