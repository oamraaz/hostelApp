<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <form action="/" method="POST" class="flex flex-col items-center text-center" @submit.prevent @click.stop>
            <h2>Please,<br>Login or Register</h2>
            <input type="email" v-model="user.username" placeholder="Email">
            <input type="password" v-model="user.password" placeholder="Password">
            <div class="flex">
                <button class="btn-login" @click="login">Log in</button>
                <button class="btn-register" @click="$emit('hideModal')">Register</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AuthService from './../services/AuthService'
onMounted(() => {
  console.log('Component is mounted')
})
const emit = defineEmits(['hideModal'])
const user = ref({
  email: '',
  password: ''
})
async function login () {
  const result = await AuthService.login(user.value)
  console.log(result)
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
