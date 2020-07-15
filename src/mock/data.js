import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {   
  title: 'hong | Spring Developer', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'port',
  name: 'hong',
  subtitle: 'test',
  cta: '11',
};    

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'test 1',
  paragraphTwo: 'test 2',   
  paragraphThree: 'test 3',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'info 1 test info1',
    info2: 'info 2 test info 2',
    url: '',    
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',    
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '415hdh@gmail.com',
};

// FOOTER DATA    
export const footerData = {
  networks: [
   
    {   
      id: nanoid(),
      name: 'github',   
      url: 'https://github.com/sodapapa',
    },
    {   
      id: nanoid(),
      name: 'github',   
      url: 'https://github.com/sodapapa',
    },
    {   
      id: nanoid(),
      name: 'github',   
      url: 'https://github.com/sodapapa',
    },
    
  ],    
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
