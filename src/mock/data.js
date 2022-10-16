import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hayden Poore', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hayden Poore',
  subtitle: 'Programmer | Product Manager | Data Scientist',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'I’m a data-driven technology enthusiast with a passion for learning and creating new things. As a student of data science and business analytics I’m no stranger to creative problem solving and thinking outside the box.',

  paragraphTwo:
    'I’ve been able to refine these skills working internationally in the Singaporean Venture Capital industry where I gained important cultural and business insights. My other experience in the entertainment analytics industry and startup world helped me understand how to successfully work with a team of incredibly talented people and accomplish goals and meet deadlines.',
  paragraphThree:
    'As an upcoming graduate of the University of Colorado Boulder my goal is to step into the world of Product Management and take my data-driven and analytical background to come up with and develop innovative features that make a difference to the core metrics of your company.',
  resume: 'https://drive.google.com/file/d/17dp0I92CqNbiJsxtTUoOWI9Y8uHVfDWg/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartbrain.png',
    title: 'SmartBrain Facial Recognition Application',
    info:
      'Full stack Facial Recognition Web Application built using React and Node.js. Deployed front-end and back-end on Heroku. Used bcrypt to hash passwords and store them in a PostreSQL database. Back-end database allows for secure registration and counts number of entries per user. Give it a try! User: test@gmail.com Pass: 123',
    info2: '',
    url: 'https://smart-brain-456.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.png',
    title: 'COVID-19 Tracker',
    info:
      'COVID-19 Cases, Recoveries, and Deaths tracker built using React and deployed to Netlify.',
    info2: '',
    url: 'https://covid-19-tracker324259.netlify.app/',
    repo: '', // if no repo, the button will not show up
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
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'haydenpoore@gmail.com',
};

// FOOTER DATA
export const footerData = {};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
