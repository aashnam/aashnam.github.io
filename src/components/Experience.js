import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineDot, 
  TimelineConnector, 
  TimelineContent 
} from '@mui/lab';
import { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Experience = () => {
  return (
    <div id="experience-section">
      <Timeline>
      <h4 style={{marginLeft: '60px', color: 'white', fontFamily: 'customFont', fontSize: '30px'}}>Professional Experience</h4>
        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            June 2023 - August 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>Math and English Tutor @ Kumon</h4>
            <p id='timeline-content'>• Tutored students of all ages in Math and English through personalized teaching methods to increase comprehension of skills</p>
            <p id='timeline-content'>• Maintained accurate records and performed timely data entry of student grades into the gradebook system</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              <Chip label="Data Entry" id='chip'/>
              <Chip label="Mentorship" id='chip'/>
              <Chip label="Communication" id='chip' />
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>


      <h4 style={{marginLeft: '60px', color: 'white', fontFamily: 'customFont', fontSize: '30px'}}>Experience</h4>
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            February 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>Graph Visualizations Frontend Developer @ Caesar Research Group PeopleWeave Project</h4>
            <p id='timeline-content'>• Developing an interactive graph visualization to connect researchers, improve networking experiences, and display research collaborations using React.js and D3.js</p>
            <p id='timeline-content'>• Collaborating with Graph Visualizations Team to enhance frontend features under Professor Matthew Caesar</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              <Chip label="React.js" id='chip' />
              <Chip label="Figma" id='chip'/>
              <Chip label="Frontend Development" id='chip'/>
              <Chip label="Data Visualization" id='chip'/>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            February 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>Design Consultant @ Illinois Design Consulting</h4>
            <p id='timeline-content'>• Designing UI/UX for cybersecurity platform startup Provenance Security using Miro and Figma to create intuitive and cohesive interfaces</p>
            <p id='timeline-content'>• Communicating with client to understand user needs and business objectives</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap'}}>
              <Chip label="Figma" id='chip'/>
              <Chip label="UI/UX" id='chip'/>
              <Chip label="Miro" id='chip'/>
              <Chip label="Visual Design" id='chip'/>
              <Chip label="Prototyping" id='chip'/>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            August 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>App Developer @ Society of Women Engineers (SWE)</h4>
            <p id='timeline-content'>• Creating an app for John Deere that helps detect and differentiate objects, crops, and animals for farming technology using React.js</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              <Chip label="React.js" id='chip'/>
              <Chip label="Figma" id='chip'/>
              <Chip label="JavaScript" id='chip'/>
              <Chip label="Backend Development" id='chip' />
              <Chip label="Frontend Development" id='chip'/>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            February 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>Marketing Chair @ Reflections Projections Tech Conference</h4>
            <p id='timeline-content'>• Brainstorming and executing innovative marketing strategies, such as <strong>unique social media campaigns and on-campus promotions</strong></p>
            <p id='timeline-content'>• Conducting and planning weekly meetings to communicate timelines and delegate tasks</p>
            <p id='timeline-content'>• Successfully attracted <strong>over 2,000 registrations</strong> for the event last year</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', marginRight: '100px' }}>
              <Chip label="Digital Marketing" id='chip'/>
              <Chip label="Data Analysis" id='chip'/>
              <Chip label="Copywriting" id='chip'/>
              <Chip label="Leadership" id='chip'/>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="white" id = 'timeline-date'>
            August 2022 - May 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 id='timeline-title'>Recruitment Committee Chair @ Society of Women Engineers</h4>
            <p id='timeline-content'>• Planning weekly committee meetings by planning detailed meeting agendas and bonding events</p>
            <p id='timeline-content'>• Organizing recruitment events for STEM majors on campus by collaborating with other organizations to enhance outreach</p>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', marginRight: '100px' }}>
              <Chip label="Communication" id='chip'/>
              <Chip label="Leadership" id='chip'/>
              <Chip label="Organizational Skills" id='chip'/>
              <Chip label="Event Planning" id='chip'/>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;




