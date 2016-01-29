<template>

<form>
  <div class="form-group">
    <label>Product name</label>
    <input type="text" class="form-control" placeholder="Product name">
  </div>
  <div class="form-group">
    <label>Quantity in stock</label>
    <input type="text" class="form-control" placeholder="Quantity in stock">
  </div>
  <div class="form-group">
  <label>Price per item</label>
  <input type="text" class="form-control" placeholder="Price per Item">
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
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