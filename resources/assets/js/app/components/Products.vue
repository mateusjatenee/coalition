<template>

<form v-on:submit.prevent="sendForm">
  <div class="form-group">
    <label>Product name</label>
    <input type="text" class="form-control" placeholder="Product name" v-model="productData.name">
  </div>
  <div class="form-group">
    <label>Quantity in stock</label>
    <input type="text" class="form-control" placeholder="Quantity in stock" v-model="productData.qty">
  </div>
  <div class="form-group">
  <label>Price per item</label>
  <input type="text" class="form-control" placeholder="Price per Item" v-model="productData.price">
  </div>
  <button type="submit" class="btn btn-lg btn-success" v-on:click.prevent="sendForm">Submit</button>
</form>

<h1>Products list</h1>


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
			this.loading =  true;
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