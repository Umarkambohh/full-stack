<template>
  <div class="min-vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h1 class="h4 mb-4 text-center">Reset Password</h1>

              <form>
                <div class="mb-3">
                  <label class="form-label" for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="password">New Password</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="••••••••"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    class="form-control"
                    placeholder="••••••••"
                  />
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Reset Password
                </button>
              </form>

              <p class="text-center mt-4 mb-0 small">
                <a href="#" class="text-decoration-none">Back to Login</a>
              </p>
            </div>
          </div>

          <p class="text-center text-muted small mt-3 mb-0">© 2025 Your App</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>