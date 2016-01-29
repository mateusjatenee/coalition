<template>

</template>

<script>

export default {
	data() {
		return {
			productData: {
				name: null,
				qty: null,
				price: null
			},
			loading: false
		}
	},

	methods: {
		sendForm() {
			var resource = this.$resource('api/products');
			this.loading: true;
			resource.save({product: this.productData}).then(function(response) {
				this.loading = false;
			}, function(response) {
				console.log(response);
				this.loading = false;
			});
		}
	}
}

</script>