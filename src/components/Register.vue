<template>
  <div class="h-screen flex flex-col lg:flex-row">
    <div
      class="blue-side h-screen lg:w-1/2 mb:w-screen flex flex-col justify-center"
    >
      <div class="flex flex-col space-y-5 basis-10/12">
        <div class="flex justify-center">
          <div class="flex basis-8/12 flex-col text-white text-size-logo">
            <p>Easy and fast payments with cloud</p>
            <p>Quick solution for hotel booking</p>
          </div>
        </div>
        <div class="flex-1">
          <img src="/src/assets/register_image.jpg" />
        </div>
      </div>
    </div>
    <div
      class="white-side h-screen lg:w-1/2 mb:w-screen flex justify-center mt-3 lg:mt-0"
    >
      <div
        class="w-9/12 flex min-h-full flex-col justify-center px-6 lg:px-8 space-y-20"
      >
        <form class="space-y-20">
          <div class="space-y-10">
            <!-- Email input -->
            <div
              class="flex flex-col border-solid border-2 border-gray-200 rounded-lg p-5"
            >
              <div class="flex justify-center">
                <div class="flex flex-col basis-full space-y-5">
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      v-model="user.name"
                      type="text"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"

                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      v-model="user.email"
                      type="email"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"

                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      v-model="user.password"
                      type="password"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"

                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      v-model="user.confirmPassword"
                      type="password"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"

                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      v-model="user.date"
                      type="date"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"

                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <input
                      v-model="user.gender"
                      type="tel"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"
                    />
                  </div>
                  <div class="flex justify-center items-center">
                    <label
                      for="exampleFormControlInput1"
                      class="block flex-1 font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      v-model="user.phone"
                      type="text"
                      class="basis-2/3 block w-full bg-neutral-300 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="exampleFormControlInput3"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social login buttons -->
          <div>
            <a
              class="mb-3 flex w-full items-center justify-center rounded bg-primary pb-2 pt-2 text-center uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background-color: #3b5998; font-size: 1.4rem"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="login"
            >
              Register
            </a>
            <a
              href="#!"
              class="flex flex-col justify-center items-center"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="register"
            >
              <p>Or</p>
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  email: '',
  password: ''
})
</script>
