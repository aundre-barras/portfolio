import {React} from "react";
import {ThemeProvider} from '@mui/material/styles';
import {
    Container,
    CssBaseline,
    Typography,
    Grid
} from '@mui/material'
import {theme} from "../theme";
import linkedin from '../media/In-White-26@2x.png'
import github from '../media/github-mark-white.png'
import mailpic from '../media/mail.png'

export const Hero = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container>
                    <CssBaseline>
                        <Grid container justifyContent='center' direction='row' 
                            style={{borderRadius:'5px', background:theme.palette.background.paper}} 
                            sx={{boxShadow:10}} marginTop='5vh' marginBottom='5vh' overflow='auto'>
                            
                            <Grid item xs={12} marginTop='5vh'>
                                <Typography variant='h3'>
                                    Hey there! I'm Aundre
                                </Typography>
                            </Grid>
                            <Grid item xs={12} marginTop='5vh'>
                                <Typography variant='h5'>
                                    I am a recent graduate with a passion in full stack web development, <br/>
                                    python engineering, and quantum computing
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12} marginTop='10vh'>
                                <Typography variant='h4'>
                                    Some of my work ~
                                </Typography>
                            </Grid>

                            <Grid item xs={1} marginTop='1vh'></Grid>
                            <Grid item xs={10} marginTop='1vh' sx={{boxShadow:10, borderRadius:'5px',
                                background:theme.palette.background.default}}> 
                                <Typography variant='h5' align='left' marginTop='1vh'>
                                    &nbsp;Undergraduate Researcher
                                </Typography>
                                <Typography variant='h6' align='left' marginBottom='1vh'>
                                    <ul style={{margin: 3}}>
                                        <li>
                                            Co-created <a href={'https://github.com/QCpython/QCpy'}
                                            target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                                            <span style={{color:theme.palette.primary.main}}>QCpy</span></a>, an open 
                                            source python package designed to simulate quantum circuits on a 
                                            classical computer
                                        </li>
                                        <li>
                                            Co-authored a peer-reviewed abstract paper with a team of fellow
                                            undergraduates that was published in the <a 
                                            href={'https://dl.acm.org/doi/abs/10.1145/3545947.3576334'} 
                                            target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><span 
                                            style={{color:theme.palette.primary.main}}>ACM digital library</span></a>
                                            &nbsp;and later presented in person at SIGCSE 2023 in Toronto, Canada
                                        </li>
                                        <li>
                                            Personally implemented numerous 2D and 3D visualizations of the
                                            quantum circuit utilizing matplotlib in python and plotly/chartjs in react 
                                            which involved complex calculus and trigonometric algorithms
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={1} marginTop='1vh'></Grid>

                            <Grid item xs={12} marginTop='10vh'>
                                <Typography variant="h4">
                                    My favorite tools
                                </Typography>
                            </Grid>

                            <Grid item xs={1}></Grid>
                            <Grid item xs={10} marginTop='1vh' sx={{boxShadow:10, borderRadius: '5px',
                                background:theme.palette.background.default}}>
                                <Grid item xs={12} justifyContent='space-around' display='flex' marginTop='2vh'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                                        alt='javascript' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt='react' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        alt='python' height='50px' width='50px'/>                                
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"
                                        alt='cplusplus' height='50px' width='50px'/>                       
                                </Grid>
                                <Grid item xs={12} justifyContent='space-around' display='flex' marginTop='2vh'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                                        alt='css3' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                                        alt='materialui' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                                        alt='numpy' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                        alt='linux' height='50px' width='50px'/>
                                </Grid>
                                <Grid item xs={12} justifyContent='space-around' display='flex' marginTop='2vh' marginBottom='2vh'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                                        alt='html5' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        alt='git' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                                        alt='pandas' height='50px' width='50px'/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        alt='vscode' height='50px' width='50px'/>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>

                            <Grid item xs={4} sm={2} marginTop='15vh' marginBottom='5vh'>
                                    <a href={'https://www.linkedin.com/in/aundrebarras/'} target="_blank" rel="noreferrer">
                                        <img src={linkedin} alt='linkedin'/>
                                    </a>
                            </Grid>
                            <Grid item xs={4} sm={2} marginTop='15vh' marginBottom='5vh'>
                                <a href={'https://github.com/aundre-barras'} target="_blank" rel="noreferrer">
                                    <img src={github} alt='github' style={{width:'52px', height:'52px'}}/>
                                </a>
                            </Grid>
                            <Grid item xs={4} sm={2} marginTop='15vh' marginBottom='5vh'>
                                <a href={'mailto:aundrebarras@gmail.com'} target="_blank" rel="noreferrer">
                                    <img src={mailpic} alt='mail' style={{width:'62px', height:'62px'}}/>
                                </a>
                            </Grid>

                        </Grid>
                    </CssBaseline>
                </Container>
            </ThemeProvider>
        </div>
    )
}