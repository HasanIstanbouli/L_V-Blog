//require('./bootstrap');


import Vue from 'vue';
Vue.component('mainapp2',require('./components/mainapp.vue').default);

const app = new Vue({
    el: '#app'
});