import BasicChips from "./chips";
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../css/technologies.css'

function TechStack(){





    return(
        <>

        <div className="tech-center">
        <Stack direction="row" spacing={1}>
            <Chip label="React.js" />

        </Stack>
        
        </div>
        </>


    )
}

export default TechStack