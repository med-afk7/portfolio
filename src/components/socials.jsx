import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import '../css/socials.css'

function Socials() {




    return(
<>
        <div>

        <a href ="https://github.com/med-afk7" className='git'><GitHubIcon /></a>

       <a href="https://www.linkedin.com/in/med-phi-221108347/" className='linked'>  <LinkedInIcon /></a>
        <a href="google.com"className='email'><EmailIcon /></a>

        </div>

        <div className='download-container'>
            <a href="/cv.txt" download className='download-link'> 
            <DownloadIcon />
            <p>Download CV</p>
            </a>
 
        </div>

</>

    );

}

export default Socials