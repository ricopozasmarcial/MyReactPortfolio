import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Components/Header';
import MainFeaturedPost from '../Components/MainFeaturedPost';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/MyReactPortfolio/#/Welcome' },
  { title: 'About me', url: '/MyReactPortfolio/#/AboutMe' },
  { title: 'Projects', url: '/MyReactPortfolio/#/Projects' },
  { title: 'Aptitudes', url: '/MyReactPortfolio/#/Aptitudes' },
];

const mainFeaturedPost = {
  title: 'Projects',
  description:
    "Here you will find a brief summary of my main projects that i've developed or helped developed.",
  image: 'https://source.unsplash.com/random',
 
};

const sidebar = {
  title: 'Social',

  social: [
    { name: 'GitHub', icon: GitHubIcon , link: 'https://github.com/ricopozasmarcial' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/marchute99' },
    { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
  ],
};

const content = {
  content: 'This site was made as a showcase of who I am and what are my capabilities and projects i\'ve been a part of. I hope you enjoy your visit and aasdasdsadad',
};


export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Projects" content={content}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="My Portfolio" description="Create with React by Marcial Rico Pozas" />
    </React.Fragment>
  );
}