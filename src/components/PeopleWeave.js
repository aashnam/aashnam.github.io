import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "../App.css"; 
import '../styles/fonts.css';

const PeopleWeave = () => {
  return (
    <div style={{ paddingTop: '100px', marginLeft: '50px', marginRight: '50px'
    }}>
      <h1 style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '80px', lineHeight: '0.8' }} className="text-center mb-20">Caesar Research Group PeopleWeave Project</h1>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Overview</p>
      <p style={{ fontFamily: 'Roboto Mono', fontSize: '1.2rem', paddingLeft: '50px', paddingTop: '20px', color: 'white' }}>
        The Caesar Research Group PeopleWeave Project provides a way for researchers to collaborate with one another and build a network.
        <br/><br/>
        I am a part of the Graph Visualizations team which means that my primary focus was enhancing the features of the interactive graph that provides a visual understanding of the network between researchers.
      </p>
      <br/>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Skills Used</p>
      <Stack direction="row" spacing={1} sx={{ mt: 2, paddingLeft: '50px' }}>
        <Chip label="React.js" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Figma" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Frontend Development" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Graph Visualization" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Data Visualization" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
      </Stack>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white', marginTop: '50px', marginBottom: '20px' }}>Demonstration</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./landingPage.png" style={{ width: '70%', height: 'auto', marginLeft: '30px' }} alt="Landing Page" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px' }}>
          Our user lands on this page that appears like a search engine. This search engine will allow users to search by university affiliation, topic of study, and professor name.
        </p>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginRight: '100px', marginTop: '-20px', marginLeft: '29px' }}>
          In order to make searches more efficient, I was able to implement an autocomplete feature.
        </p>
        <img src="./autoSearch.png" style={{ width: '1200px', height: 'auto', marginRight: '40px' }} alt="Autosearch" />
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./secondPage.png"  style={{ width: '1200px', height: 'auto', marginLeft:'30px' }} alt="Graph Page" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '30px' }}>
          Upon completing a search, the user is redirected to a second page that provides more details: professors, paper topics, a collaboration network graph, to name a few.
        </p>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginRight: '100px', marginTop: '-20px', marginLeft: '29px' }}>
          A completed search will update the starting node by highlighting it on the graph.
        </p>
        <img src="./startingNode.png" style={{ width: '30%', height: 'auto', marginRight: '30px' }} alt="Starting Node" />
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./hoverNode.png"  style={{ width: '50%', height: 'auto', marginLeft: '40px' }} alt="Hover Node" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px' }}>
          Hovering over a node on the graph will give a quick glance of what their university affiliation is and what research topics they study.
        </p>
      </div>
    </div>
  );
}

export default PeopleWeave;
