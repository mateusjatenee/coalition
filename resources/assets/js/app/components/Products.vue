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

<table class="table table-striped">
	<thead>
		<tr>
			<th>#</th>
			<th>Name</th>
			<th>Quantity</th>
			<th>Price</th>
			<th>Final price</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="product in products">
			<td>{{ product.id }}</td>
			<td>{{ product.name }}</td>
			<td>{{ product.qty }}</td>
			<td>{{ product.price }}</td>
			<td>{{ product.qty * product.price }}</td>
		</tr>
	</tbody>
</table>


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

	created() {
		this.getProducts();
	},

	methods: {
		sendForm() {
			var resource = this.$resource('api/products');
			this.loading =  true;
			resource.save(this.productData).then(function(response) {
				this.loading = false;
				console.log(response);
				this.products.push(response.data);
			}, function(response) {
				console.log(response);
				this.loading = false;
			});
		},

		getProducts() {
			var resource = this.$resource('api/products');
			resource.get().then(function(response) {
				console.log(response);
				this.$set('products', response.data);
			}, function(response) {
				console.log(response);
			});
		}
	}
}

</script>