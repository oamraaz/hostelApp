<template>
    <AddClientModal style="z-index: 17;" v-show="addClientModal" @hide-modal="hideModal"></AddClientModal>
    <AddServiceModal style="z-index: 17;" v-show="addServiceModal" @hide-modal="hideModal"></AddServiceModal>
    <header class="flex">
        <div class="logo">CloudHouse</div>
        <div class="flex">
            <router-link class="navigation-tab" :class="{
                active: $route.path == '/admin'
            }" to="/admin">Домашняя<br> страница</router-link>
            <router-link class="navigation-tab" :class="{
                active: $route.path == '/bookings'
            }" to="/bookings">Брони</router-link>
            <router-link class="navigation-tab" :class="{
                active: $route.path == '/kitchen'
            }" to="/kitchen">Кухня</router-link>
        </div>

        <div class="header-right flex items-center ml-auto">
            <div class="input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Поиск">
            </div>
            <i class="fa-solid header-icon-color fa-bell rotate-25"></i>
            <i class="fa-solid header-icon-color fa-circle-question"></i>
            <i class="fa-solid header-icon-color fa-gear"></i>
            <div class="user-icon m-r-10">em</div>
        </div>
    </header>
    <div class="flex">
        <nav>
            <div class="nav-title p-l-18">Ак-Данис</div>
            <div class="location p-l-18">Иссык-Куль, Камсомол</div>
            <div class="nav-title p-l-18">Менеджмент</div>
            <div class="navigation">
                <div class="navigation-link p-l-18">
                    <div class="img">
                        <img src="../assets/admin/calendar.svg" alt="">
                    </div>
                    <!--<img src="../assets/admin/calendar-lines-pen.svg" width="20" alt="">-->

                    <span>Брони</span>
                </div>
                <div class="navigation-link p-l-18">
                    <div class="img">
                        <img src="../assets/admin/food.svg" alt="">
                    </div>

                    <span>Кухня</span>
                </div>
                <div class="navigation-link active p-l-18">
                    <div class="img">
                        <img src="../assets/admin/statistics.svg" alt="">
                    </div>

                    <span>Статистика</span>
                </div>
            </div>
        </nav>
        <div class="content w-full">
            <div class="path">Проекты / CloudHouse</div>
            <div class="content-title">Доска Cloud</div>

            <div class="flex m-t-25">
                <div class="input">
                    <input type="text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="user-icon m-r-10">em</div>
                <div class="user-icon user-icon-bg-2 m-r-10">z</div>
                <div class="user-icon user-icon-bg-3 m-r-10">r</div>

                <i class="fa-solid fa-user-plus"></i>

                <select>
                    <option value="1">Эпик</option>
                    <option value="2">....</option>
                </select>
            </div>

            <div class="flex flex-wrap">
                <div class="card">
                    <div class="card-title">Прибывающие</div>
                    <div class="card-content">
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status paid">Оплачено</span>
                            <div class="building">12 - B1</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">12 - B1</div>
                        </div>
                        <div class="create-card-client" @click="showAddClientModal">+ Создать заселение</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title">Убывающие</div>
                    <div class="card-content">
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status paid">Оплачено</span>
                            <div class="building">12 - B1</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status partially_paid">Частично оплачено</span>
                            <div class="building">1 - А4</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Иван Иванов</div>
                            <span class="status unpaid">Не оплачено</span>
                            <div class="building">4 - С2</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title">Сервисы</div>
                    <div class="card-content">
                        <div class="card-client">
                            <div class="username">Доп. уборка</div>
                            <div class="building" style="margin-top: 5px;margin-bottom: -3px;">5 $</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Доп. комплект полотенец</div>
                            <div class="building" style="margin-top: 5px;margin-bottom: -3px;">5 $</div>
                        </div>
                        <div class="card-client">
                            <div class="username">Доп. кровать</div>
                            <div class="building" style="margin-top: 5px;margin-bottom: -3px;">5 $</div>
                        </div>
                        <div class="create-card-client" @click="showAddServiceModal">+ Добавить сервис</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddClientModal from './AddClientModal.vue'
import AddServiceModal from './AddServiceModal.vue'
const addClientModal = ref(false)
const addServiceModal = ref(false)

function hideModal () {
  addClientModal.value = false
  addServiceModal.value = false
}
function showAddClientModal () {
  addClientModal.value = true
}
function showAddServiceModal () {
  addServiceModal.value = true
}
</script>
<style>
header {
    position: relative;
    z-index: 15;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /*padding: 12px 22px;*/
}

.logo {
    padding: 12px 0px 12px 22px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
}

.navigation-tab {
    padding: 0 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
}

.navigation-tab:not(.navigation-tab:last-child) {
    margin-right: 12px;
}

.navigation-tab:hover,
.navigation-tab.active {
    color: #094FAA;
    border-bottom: 3px solid #094FAA;
}

.header-right {
    padding: 15px 10px;
    height: 100%;
}

.header-icon-color {
    color: #073675;
    margin-right: 15px;
}

.m-r-10 {
    margin-right: 10px;
}

.input input {
    height: 30px;
    padding-top: 3px;
    border: none;
    padding-left: 30px;
}

.input .fa-magnifying-glass,
.input input::placeholder {
    color: rgb(136, 136, 136);
}

.input {
    height: 30px;
    position: relative;
    border: 2px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 15px;
}

.input .fa-magnifying-glass {
    font-size: 14px;
    position: absolute;
    left: 8px;
    top: 6px;
}

.rotate-25 {
    transform: rotate(25deg);
}

.user-icon {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #650aa1;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
}

nav {
    min-width: 210px;
    height: 711px;
    left: 0px;
    top: 57px;

    background: #F5F5F5;

    padding: 20px;
}
.content-title,
.nav-title {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3A3943;
}

.path,
.location {
    font-family: 'Inter';
    font-size: 12px;
    line-height: 15px;

    color: rgba(0, 0, 0, 0.4);

    margin-top: 5px;
    margin-bottom: 25px;
}

.navigation-link {
    display: flex;
    align-items: center;
    height: 30px;
    position: relative;
    margin-bottom: 5px;
    cursor: pointer;
}

.navigation-link:hover,
.navigation-link.active {
    color: #185CB5;
    background: rgba(18, 153, 230, 0.29);
    border-radius: 3px;
}

.navigation-link:hover::before,
.navigation-link.active::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 15px;
    background: #185CB5;
    border-radius: 0px 1px 1px 0px;
    left: 0;
}

.navigation-link .img {
    width: 25px;
    margin-right: 10px;
}

.p-l-18 {
    padding-left: 18px;
}

.content-title {
    font-size: 18px;
}

.path {
    margin-bottom: 10px;
}

.content {
    padding: 22px 40px;
}
.content .input .fa-magnifying-glass {
    font-size: 14px;
    position: absolute;
    left: unset;
    right: 8px;
    top: 6px;
}

.content .input input {
    padding-left: 8px;
}

.m-t-25 {
    margin-top: 25px;
}

.content .input {
    border-radius: 3px;
}

.user-icon-bg-2 {
    background: rgb(46, 133, 177);
}

.user-icon-bg-3 {
    background: rgb(41, 74, 194);
}

.content .user-icon {
    outline: 2px solid white;
    margin-right: -2px;
}

.fa-user-plus {
    margin-left: 15px;
    padding: 5px 3px 5px 6px;
    font-size: 13px;
    max-width: 22px;
    max-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ccc;
    color: rgb(141, 140, 140);
}

select {
    margin-left: 8px;
    border: none;
    font-size: 14px;
    height: 22px;
    padding-left: 8px;
    padding-right: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
}

.card {
    margin-top: 30px;
    margin-right: 20px;
    background: #ccc;
    padding: 8px;
    max-width: 200px;
    min-width: 200px;
}

.card-title {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
}

.card-client {
    background: white;
    padding: 5px 8px 8px;
    border-radius: 3px;

    font-family: 'Inter';
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 8px;
}
.create-card-client {
    background: white;
    display: flex;
    align-items: center;
    padding-left: 5px;

    font-family: 'Inter';
    line-height: 13px;
    margin-bottom: 8px;
    height: 16px;
    font-size: 12px;

    border-radius: 3px;

    cursor: pointer;
}

.status {
    display: inline-flex;

    height: 12px;
    align-items: center;
    padding: 0 5px;
    margin-top: 11px;
    margin-bottom: 7px;

    border-radius: 3px;
}
.paid {
    background: #0DEE4C40;
    color: #38B40DE5;
}
.unpaid {
    background: #EE0D0D3D;
    color: #B40D0DE5;
}
.partially_paid {
    background: #EAEE0D40;
    color: #A6B40DE5;
}

.building {
    font-size: 12px;
}

.card-content {
    overflow: hidden;
    overflow-y: scroll;
    max-height: 350px;
    padding-right: 4.5px;
    margin-right: -4.5px;
}

.card-content::-webkit-scrollbar {
    width: 7px;
}

.card-content::-webkit-scrollbar-track {
    margin-left: 2px;
    background-color: transparent;
}

.card-content::-webkit-scrollbar-thumb {
    background-color: rgb(93, 93, 93);
    border-radius: 5px;
}

.card-content::-webkit-scrollbar-thumb:hover {
    background-color: rgb(109, 166, 221);
}

</style>
