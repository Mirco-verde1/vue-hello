
var app = new Vue({
  el: '#msg-text',
  data:{
    message:'',
    img:'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png',
    classHide : 'hide',
    textColor: 'red',
    counter: 0,

  },

  methods: {

    changeColor: function(){

      this.textColor= 'yellow';
    },

    counterAdd : function(){

     if (this.counter < 10) {

      this.counter ++;
    }else {
      alert('EMMOBBASTAPERO')
    }


    }

  }
});


Vue.config.devtools = true;
