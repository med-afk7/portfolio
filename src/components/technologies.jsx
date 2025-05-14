import BasicChips from "./chips";
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import OutlinedCard from "./project1";
import OutlinedCard2 from "./project2";
import OutlinedCard3 from "./project3";
import TechCard from "./techcard";
import '../css/technologies.css'
import reactLogo from '../assets/react.png'; 
import gitLogo from '../assets/Git.png';
import nextJsLogo from'../assets/Next.js.png';
import TailwindLogo from'../assets/Tailwind CSS.png';
import cppLogo from '../assets/c++.png';
import javaLogo from '../assets/Java.png'






const Technologies = () => <>
<div className="outline">
 <div className="techs">
    <TechCard Techname="ReactJS" Techdis="Powerfull front-end library" Techsrc={reactLogo} />
    <TechCard Techname="Git" Techdis="Version control" Techsrc={gitLogo} />
    <TechCard Techname="NextJS" Techdis="Back-End library"Techsrc={nextJsLogo} />
   


    </div>

    <div className="techs">
             <TechCard Techname="Java" Techdis="Coding language" Techsrc={javaLogo} />
    <TechCard Techname="Tailwind CSS" Techdis="CSS Framework"  Techsrc={TailwindLogo}/>
    <TechCard Techname="c++" Techdis="Coding language" Techsrc={cppLogo}/>

    </div>
    </div>


 </>
const Projects = () => <div><div className="cards-s"><OutlinedCard /> <OutlinedCard2 /> <OutlinedCard3 /></div></div>;
const WorkExperience = () => <div > <h1><strong>404 Not Found!</strong></h1>
</div>;

function TechStack(){

  const [selected, setSelected] = React.useState('Technologies');

    const handleClick = (label) => {
        setSelected(label);
    };

    const renderComponent = () => {
        switch (selected) {
            case 'Technologies':
                return <Technologies />;
            case 'Projects':
                return <Projects />;
            case 'Work-experiance':
                return <WorkExperience />;
            default:
                return null;
        }
    };


     return (
        <>
            <div className="tech-center">
                <Stack direction="row" spacing={1}>
                    {['Technologies', 'Projects', 'Work-experiance'].map(label => (
                        <Chip
                            key={label}
                            label={label}
                            color={selected === label ? 'primary' : 'default'}
                            onClick={() => handleClick(label)}
                        />
                    ))}
                </Stack>
            </div>
            <div className="component-container">
                    {renderComponent()}
                </div>
        </>
    );
}



export default TechStack