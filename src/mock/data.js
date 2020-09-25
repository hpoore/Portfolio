import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hayden Poore | Data Scientist', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Hayden Poore',
  subtitle: 'Data Scientist | Product Manager',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'Current Senior at the University of Colorado Boulder receiving a Bachelor of Science in Information Science with a minor in Business Analytics in the Spring of 2021.',
  paragraphTwo:
    'Skilled at providing real world insights through data using computational tools. Use of Python to perform complex data analysis and visualization to help better understand the world around us through data.',
  paragraphThree:
    'Proven internship experience in the venture capital startup industry and entertainment analytics industry. ',
  resume:
    'https://docs.google.com/document/d/1PAc2HlQCqWMHTBItoLxFvaQINxwO0iCiILRnxkIqWus/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid.png',
    title: 'COVID-19 Tracker',
    info:
      'COVID-19 Cases, Recoveries, and Deaths tracker built using React and deployed to Netlify.',
    info2: '',
    url: 'https://covid-19-tracker324259.netlify.app/',
    repo: 'https://covid-19-tracker324259.netlify.app/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'india_graph.png',
    title: 'Exploratory Data Analysis on the Indian Agriculture Sector',
    info:
      'Took a data driven approach to understand the rising number of farmer suicides in rural India. Used the Facebook Prophet model to forecast cereal yields and employment in the industry.',
    info2:
      'Featured in The Startup, Medium.com’s largest active publication. Collected data using Python 3 to web scrape and create reliable data sets. ▪ Cleaned and visualized data using Python 3, Seaborn, and Plot.ly. Applied machine learning knowledge to use Facebook’s Prophet model to forecast cereal yields, unemployment, and C02 emissions over the next 5 years. ▪ Created Pearson Correlation coefficient diagrams to visualize results.',
    url:
      'https://medium.com/swlh/how-climate-change-is-causing-farmers-in-rural-india-to-take-their-own-lives-5a2134e05909',
    repo: 'https://github.com/hpoore/eda_agriculture', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github.png',
    title: 'Github Finder App',
    info:
      'Application that searches for users on Github and returns their most recent repositories and profile data.',
    info2: '',
    url: 'https://githubfinder83325.netlify.app/',
    repo: 'https://githubfinder83325.netlify.app/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '(425)-526-9291 | haydenpoore@gmail.com',
  btn: 'Email Me',
  email: 'haydenpoore@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
