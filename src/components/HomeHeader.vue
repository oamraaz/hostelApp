<template>
    <header class="relative">
        <nav class="flex justify-between items-center">
            <div class="logo">AK-DANIS</div>
            <div class="navigation item-center">
                <router-link class="navigation-item" :class="{
                    active: $route.path == '/'
                }" to="/">HOME</router-link>
                <router-link class="navigation-item" :class="{
                    active: $route.path == '/room'
                }" to="/room">ROOMS</router-link>
                <router-link class="navigation-item" :class="{
                    active: $route.path == '/about'
                }" to="/about">ABOUT</router-link>
                <router-link class="navigation-item" :class="{
                    active: $route.path == '/bookings'
                }" to="/bookings">BOOKINGS</router-link>
            </div>
            <div class="flex items-center">
                <div class="lang">ENG</div>
                <img v-if="isAuthorized" src="../assets/profile.png" class="profile-icon" alt="">
                <div v-else class="login select-none" @click="$emit('showModal')">Login</div>
            </div>
        </nav>
        <div class="header-title"> Welcome to Issyk-Kul</div>
        <div class="pos-a">
            <div class="items">
                <div class="item">
                    <div>
                        <div class="item_name">CHECK-IN</div>
                        <div class="item_description"><img src="../assets/Check_Date.png" alt="">Check-In Date</div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div class="item_name">CHECK-OUT</div>
                        <div class="item_description"><img src="../assets/Check_Date.png" alt="">Check-Out Date</div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div class="item_name">ROOMS</div>
                        <!--<div class="item_description"><i class="fa-solid fa-angle-down"></i>Suits</div>-->
                        <div class="item_description">
                            <i class="fa-solid fa-angle-down"></i>
                            <select>
                                <option value="1">Suits</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div class="item_name">GUESTS</div>
                        <!--<div class="item_description"><i class="fa-solid fa-angle-down"></i>1 Person</div>-->
                        <div class="item_description">
                            <i class="fa-solid fa-angle-down"></i>
                            <select>
                                <option value="1">1 Person</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item active">
                    <button class="item_name" v-on:click="checkAvailability()">CHECK AVAILABILITY</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import useAuth from './../composables/useAuth'
const { isAuthorized } = useAuth()
async function checkAvailability () {
  console.log('Test')
  console.log(isAuthorized.value)
}



</script>

<style>
header {
    width: 100%;
    height: 698px;
    background: url(../assets/picture-2.jpg) 0 0/cover no-repeat;
}

.navigation {
    display: flex;
}

.navigation-item {
    width: 110px;
    height: 55px;
    margin-right: 20px;

    font-family: 'Inter';
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
}

.navigation-item.active,
.navigation-item:hover {
    color: white;
    border-bottom: 1px solid white;
}

.logo {

    width: 215px;

    font-family: 'IslandMoments';
    font-size: 36px;
    line-height: 41px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
    cursor: pointer;
}

.lang {
    cursor: pointer;
    width: 95px;
    height: 45px;

    font-family: 'Inter';
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
}

.login {
    cursor: pointer;
    width: 151px;
    height: 50px;

    font-family: 'Inter';
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;

    width: 151px;
    height: 50px;
    left: 1248px;
    top: 13px;

    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
}

header {
    padding: 12px 40px;
}

.header-title {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'IslandMoments';
    font-size: 96px;
    line-height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100%;
    padding-bottom: 75px;

    color: #FFFFFF;
}

.item_description select {
    padding-left: 0;
    background: transparent;
    border: none;
}
.item_description {
    display: flex;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #5C5C5C;
    white-space: nowrap;
    overflow: hidden;
    height: 20px;
    margin-top: 5px;
}

.item_description img {
    margin-right: 4px;
}

.item_description svg {
    margin-right: 4px;
    padding-top: 6px;
}

.pos-a {
    position: absolute;
    top: calc(100% - 75px);
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.items {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item {
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    min-width: 190px;
    height: 150px;
}

.item:not(.item.active) {
    padding-left: 15px;
}

.item.active {
    width: 190px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    background: #8CAA14;

}

.item_name {

    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    text-align: center;
}

.profile-icon {
    border-bottom: 1px solid white;
    width: 76px;
    height: 51px;
    padding: 0 17.5px 10px;
    cursor: pointer;
    user-select: none;
}
</style>
