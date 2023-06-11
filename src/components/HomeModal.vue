<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <form action="/" method="POST" class="flex flex-col items-center text-center" @submit.prevent @click.stop>
            <h2>Please,<br>Login or Register</h2>
            <input type="email" v-model="user.username" placeholder="Username">
            <input type="password" v-model="user.password" placeholder="Password">
            <input type="password" v-model="user.password" placeholder="Confirm Password" v-if="isRegister">
            <input type="text" v-model="user.name" placeholder="Name" v-if="isRegister">
            <input type="text" v-model="user.lastName" placeholder="Last Name" v-if="isRegister">
            <!-- birth date -->
            <input type="date" v-model="user.birthDate" placeholder="Birth Date" v-if="isRegister">
            <!-- citizenship -->
            <input type="text" v-model="user.citizenship" placeholder="Citizenship" v-if="isRegister">

            <div class="flex">
                <button class="btn-login" @click="signIn">Log in</button>
                <button class="btn-register" @click="signUp">Register</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
const isRegister = ref(false)
const emit = defineEmits(['hideModal'])
const user = ref({})
const { login, register} = useAuth()
const router  = useRouter()
async function signIn () {
  if (isRegister.value) {
    isRegister.value = !isRegister.value
    return
  }
  console.log(user.value)
  const result = await login(user.value)
  console.log(result)
  router.push({ path: '/profile' })

  emit('hideModal')
}
async function signUp () {
  if (!isRegister.value) {
    isRegister.value = !isRegister.value
    return
  }
  const result = await register(user.value)
  console.log(result)
  router.push({ path: '/' })

  emit('hideModal')
}

</script>
<style scoped>
.fixed {
    background: rgba(0, 0, 0, 0.571);
}

form {
    background: white;
    padding-top: 30px;
    padding-bottom: 40px;
    width: 481px;
    border-radius: 10px;
}

h2 {

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
    margin-bottom: 35px;
}

input {
    width: 340px;
    height: 40px;

    background: #FFFFFF;
    border: 1px solid #B6B6B6;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-bottom: 36px;
}

.btn-login {
    height: 35px;
    padding: 0 15px;

    font-family: 'Roboto';
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
    background: #8CAA14;
    border-radius: 5px;

    margin-right: 20px;
}

.btn-register {
    height: 35px;
    padding: 0 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
    background: #135FC3;
    border-radius: 5px;
}
</style>
