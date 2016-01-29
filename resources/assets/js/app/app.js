var Vue = require('vue');

Vue.use(require('vue-resource'));
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');

import Products from './components/Products.vue';

new Vue({
	el: 'body',

	components: {
		Products: Products
	}


});