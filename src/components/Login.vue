<template>
<Navbar></Navbar>
  <div class="h-screen flex flex-col lg:flex-row">
    <div class="white-side h-screen lg:w-1/2 mb:w-screen flex justify-center">
      <div
        class="w-9/12 flex min-h-full flex-col justify-center px-6 lg:px-8 space-y-20"
      >
        <div class="flex justify-center">
          <div
            class="w-11/12 sm:w-6/12 md:w-4/12 lg:w-6/12 flex justify-center border-solid border-2 border-gray-200 rounded-lg items-center space-x-5"
          >
            <img
              class="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <p class="text">Cloudhouse</p>
          </div>
        </div>
        <form class="space-y-20">
          <div class="space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="flex justify-center">
                <h1 class="text-4xl text-gray-900">Log in to your account</h1>
              </div>
            </div>
            <!-- Email input -->
            <div
              class="flex flex-col border-solid border-2 border-gray-200 rounded-lg p-5"
            >
            <div class="flex justify-center">
              <div class="flex justify-center basis-full">
                <div class="flex flex-col basis-4/5 space-y-5">
                  <input
                  v-model="user.email"
                    type="text"
                    class="block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="exampleFormControlInput3"
                    placeholder="Email"
                    autocomplete="email"
                  />

                  <input
                  v-model="user.password"
                    type="password"
                    class="block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>

          <!-- Social login buttons -->
          <div>
            <a
              class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="login"
            >
              Log in
            </a>
            <a
              class="mb-3 flex flex-col w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="register"
            >
              <p>Or</p>
              Registration
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="blue-side h-screen lg:w-1/2 mb:w-screen flex flex-col justify-center">
      <div class="flex flex-col space-y-5 basis-10/12">
        <div class="flex justify-center">
          <div class="flex basis-8/12 flex-col text-white text-size-logo">
            <p>Easy and fast payments with CloudHouse</p>
            <p>Quick solution for hotel booking</p>
          </div>
        </div>
        <div class="flex-1">
          <img src="/src/assets/login_image.jpeg" />
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './Navbar.vue'
const router = useRouter()
const user = reactive({
  email: '',
  password: ''
})
function login () {
  console.log(user)
}
function register () {
  console.log('register')
  router.push({ name: 'register'})
}
</script>
