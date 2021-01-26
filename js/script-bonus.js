
var app = new Vue({
 el: '#msg-text',
 data:{
 message:'',
 img:'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png',
 classHide : 'hide',
 textColor: 'red'

},

 methods:{
   Click: function(){
   this.textColor = 'blue';

 }
 }

});




Vue.config.devtools = true;
