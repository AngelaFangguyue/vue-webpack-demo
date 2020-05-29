//alert('hello world');
import Vue from 'vue';
// console.log(Vue);
// var vm = new Vue({

//     el:'#app',
//     data:{
//         msg:'hello vue'
//     }
// })
// console.log(vm);

import hello from './hello.vue';
import './styles/main.css';

new Vue({
    el: "#app",
    template: '<hello/>',
    components: {
        hello
    }
});