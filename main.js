var arg = new Vue({
  el: '#wrap',
  
  data: {
    name: 'Wayne Anam',
    
    navs: [
      { title: 'Projects' },
      { title: 'Skills' },
      { title: 'About Me' },
    ],
    
    temps: [
     { title: '', description: '', source:'', sourceName:''},
    ],
    
    projects: [
      { title: 'Portfolio', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'', sourceName:'Portfolio' },
      { title: 'Draughts - Battle of Bots #6', description: 'Draughts is a two player board game similar to checkers. This was my first encounter with the python programming language, in terms of learning and using it on an actual project.', source:'https://github.com/wayneanam/Draughts', sourceName:'Draughts' },
      { title: 'Reversi - Battle of Bots #5', description: 'This is the first coding competition that I had ever entered. Before this competition I had never played or heard of this game but it was fun figuring out a strategy for it.', source:'https://github.com/wayneanam/Reversi', sourceName:'Reversi' },
      { title: 'Choice', description: 'This is a template site that I created while learning Vue.js. The typical way of making filled choice boards is by using some sort of paint or power-point program. I decided to create a choice box generator to simplify this process.', source:'https://wayneanam.github.io/Choice/', sourceName:'Choice' },
      { title: 'Static Yahoo Front Page', description: 'This was my earliest attempt at polishing my HTML and CSS skills. The layout of yahoo would occasionally change so I decided to just work of off memory.', source:'https://wayneanam.github.io/WebDevPractice/', sourceName:'Static Yahoo' },
      { title: 'CampusAlly', description: 'CampusAlly is a website that was designed to provide various tools to help students succeed in their classes. This project will be resumed shortly.', source:'http://campusally.com', sourceName:'CampusAlly' },
    ],
    
    skills: [
      { title: 'Programming Languages', description:'I am proficient in the following languages C++, JavaScript, Assembly, HTML and CSS and the JavaScript framework Vue.js. I am adequate in the use of Python and GDScript.' },
      { title: 'Computer Literacy', description:'I started using computers at a young age and developed an interest in working with different devices running various operating systems and programs. Whenever my friends or family has computer concerns or just need advice they usually call me.' },
      { title: 'Critical Thinking', description:'The ability to quickly analyze a problem and figure out a solution is very valuable. I try to increase my critical thinking skills by asking questions, putting myself in other people\'s shoes, joining coding competitions, solving problems on Project Euler and HackerRank.'},
      { title: 'Willingness to Learn', description:'I taught myself how to program in multiple languages outside of class.' },
    ],
    
    about: [
      { title: 'About Me', description: 'My name is Wayne Anam and I am a computer engineering student with a passion for computer science. I enjoy programming, learning new ideas and working with electronics. During my free time I lift weights, watch television, read fiction, play sports and video games.'},
      { title: 'Git Repository', description: 'My github is found at:', source:'https://github.com/wayneanam', sourceName:'Github' },
      { title: 'Email Address', description: 'My email address is found at:', source:'mailto:wayneanam@yahoo.com', sourceName:'Email' },
    ]     
  },
  
  methods: {
    changeNav: function(index) {
      console.log(this.$parent);
      if(index == 0) {
        this.temps = this.projects;
      }
      else if(index == 1) {
        this.temps = this.skills;
      }
      else if(index == 2) {
        this.temps = this.about;
      }
    },
  },

  ready: function() {
    this.temps = this.projects;
  },
})