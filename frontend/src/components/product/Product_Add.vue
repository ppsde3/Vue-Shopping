<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>


      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-control"
          id="name"
          required
          v-model="product.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="product.price"
          name="price"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../../services/AddProductService";
export default {
  name: "add-product",
  data() {
    return {
      product: {
        name: "",
        title: "",
        description: "",
        price: ""
      }
    };
  },
  methods: {
    saveProduct() {
      var data = {
        name: this.product.name,
        title: this.product.title,
        description: this.product.description,
        price: this.product.price
      }
      this.product = {};
      ProductDataService.create(data)
        .then(response => {
          alert("Product Added successfully");
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    newProduct() {
      this.product = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>