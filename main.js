var arg = new Vue({
  el: '#wrap',
  
  data: {
    name: 'Title ipsum',
    
    navs: [
      { title: 'Projects ipsum' },
      { title: 'Achievements ipsum' },
      { title: 'Lorem ipsum' },
    ],
    
    temps: [
     { title: '', description: ''},
    ],
    
    projects: [
      { title: 'Projects ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Projects ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Projects ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Projects ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    ],
    
    achievements: [
      { title: 'Achievements ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Achievements ipsum', description:'' },
      { title: 'Achievements ipsum', description:'' },
      { title: 'Achievements ipsum', description:'' },
    ],
    
    lorem: [
      { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      { title: 'Lorem ipsum', description: ''},
      { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    ]     
  },
  
  methods: {
    changeNav: function(index) {
      console.log(this.$parent);
      if(index == 0) {
        this.temps = this.projects;
      }
      else if(index == 1) {
        this.temps = this.achievements;
      }
      else if(index == 2) {
        this.temps = this.lorem;
      }
    },
  },

  ready: function() {
    this.temps = this.projects;
  },
})