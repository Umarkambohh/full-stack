<template>
    <div class="container py-5">
  <h1 class="mb-4">Create Product</h1>

  <form class="card p-4 shadow-sm">
    <!-- Product Title -->
    <div class="mb-3">
      <label for="productTitle" class="form-label">Product Title</label>
      <input type="text" class="form-control" id="productTitle" placeholder="Enter product title">
    </div>

    <!-- Product Name -->
    <div class="mb-3">
      <label for="productName" class="form-label">Product Name</label>
      <input type="text" class="form-control" id="productName" placeholder="Enter product name">
    </div>

    <!-- Price -->
    <div class="mb-3">
      <label for="productPrice" class="form-label">Price</label>
      <div class="input-group">
        <span class="input-group-text">$</span>
        <input type="number" class="form-control" id="productPrice" placeholder="0.00" min="0" step="0.01">
      </div>
    </div>

    <!-- Category -->
    <div class="mb-3">
      <label for="productCategory" class="form-label">Category</label>
      <select class="form-select" id="productCategory">
        <option selected disabled>Choose category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home & Living</option>
        <option value="sports">Sports</option>
      </select>
    </div>

    <!-- Actions -->
    <div class="d-flex justify-content-end">
      <button type="reset" class="btn btn-outline-secondary me-2">Reset</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
</div>
</template>

<script setup></script>