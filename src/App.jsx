// import "./App.css";

import { Container, Maincontainer } from "./css/Container";

import {
  LeftContainer,
  LeftSection,
  Name,
  Contact,
  Email,
  Location,
  Phone,
  Mail,
  Address,
} from "./css/Leftsection";

import {
  RightContainer,
  Professionalsummary,
  Skills,
  Experience,
  Education,
  Language,
  Summaryparagraph,
  Skillsparagraph,
  Experienceparagraph,
  Educationpargraph,
  Languagepargraph,
  Unorderedlistcontainer,
  Unorderedlistmain,
  UnorderedlistTitle,
} from "./css/Rightsection";

const App = () => {
  return (
    <Maincontainer>
      <Container>
        <LeftContainer>
          <LeftSection>
            <Name>Yakubu Amidu</Name>
            <Contact>
              <Phone>Phone: </Phone>
              <p>323-875-6263</p>
            </Contact>
            <Email>
              <Mail>Email: </Mail>
              <p>yakubamidu19@gmail.com</p>
            </Email>
            <Location>
              <Address>Location: </Address>
              <p>Los Angele, California</p>
            </Location>
          </LeftSection>
        </LeftContainer>

        <RightContainer>
          <div>
            <Professionalsummary>Professional summary</Professionalsummary>
            <Summaryparagraph>
              Aspiring and detail-oriented Full-stack Software Developer with a
              strong foundation in front-end and back-end technologies. Eager to
              contribute my coding skills and passion for creating innovative
              solutions in an entry-level role that fosters professional growth
              and allows me to make a meaningful impact.
            </Summaryparagraph>
          </div>
          <div>
            <Skills>Skills</Skills>
            <Skillsparagraph>
              <Unorderedlistcontainer>
                <Unorderedlistmain>
                  <UnorderedlistTitle>FRONT-END</UnorderedlistTitle>
                  <li>Html5 & css</li>
                  <li>Reactjs</li>
                  <li>React-native</li>
                  <li>Bootstrap & media query</li>
                  <li>Node-sass & styled-components</li>
                </Unorderedlistmain>
                <ul>
                  <UnorderedlistTitle>BACK-END</UnorderedlistTitle>
                  <li>Javascript</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>Mongodb</li>
                  <li>Firebase</li>
                </ul>
              </Unorderedlistcontainer>
            </Skillsparagraph>
          </div>
          <div>
            <Experience>Experience</Experience>
            <Experienceparagraph>
              <p>
                Freelancer since 2022. Turning my passion into a profession
                after completing my courses.
              </p>
            </Experienceparagraph>
          </div>
          <div>
            <Education>Education</Education>
            <Educationpargraph>
              <p>Los Angeles City College</p>
              <p>Udemy.com online courses</p>
            </Educationpargraph>
          </div>
          <div>
            <Language>Language</Language>
            <Languagepargraph>English</Languagepargraph>
          </div>
        </RightContainer>
      </Container>
    </Maincontainer>
  );
};

export default App;
