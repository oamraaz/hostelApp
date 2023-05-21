<template>
    <pay-modal style="z-index: 17;" v-show="pay_modal" @hide-modal="(bool) => { pay_modal = bool }"></pay-modal>
    <building-modal style="z-index: 16;" v-show="building_modal" @show-pay-modal="show_pay_modal" @hide-modal="(bool) => { building_modal = bool }"></building-modal>
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
    <div class="building-items flex flex-col">
        <div class="building-item building-item-header">
            <div class="box1 flex items-center">
                <select>
                    <option value="1">Тип</option>
                </select>
                <input class="search-building" type="text" placeholder="Здание">
                <div class="status"></div>
            </div>
            <div class="box2 flex flex-col justify-between items-center">
                <div class="month-name">Апр</div>
                <div class="week-days">
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                </div>
            </div>
            <div class="box2 flex flex-col justify-between items-center">
                <div class="month-name">Апр</div>
                <div class="week-days">
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                </div>
            </div>
            <div class="box2 flex flex-col justify-between items-center">
                <div class="month-name">Апр</div>
                <div class="week-days">
                    <span>24</span>
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                </div>
            </div>
            <div class="box2 flex flex-col justify-between items-center">
                <div class="month-name">Май</div>
                <div class="week-days">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                </div>
            </div>
            <div class="box2 flex flex-col justify-between items-center">
                <div class="month-name">Май</div>
                <div class="week-days">
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                </div>
            </div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="period" @click="show_building_modal()" :style="setPeriod(1, 4, 5, 6)"></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status paid"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="period" @click="show_building_modal()" :style="setPeriod(1, 3, 5, 5)"></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status paid"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="period" @click="show_building_modal()" :style="setPeriod(3, 5, 5, 5)"></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status paid"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status paid"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="period" @click="show_building_modal()" :style="setPeriod(1,2,1,4)"></div>
        </div>
        <div class="building-item">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="period" @click="show_building_modal()" :style="setPeriod(3,5,2,1)"></div>
        </div>
        <div class="building-item" v-for="i in 12" :key="i">
            <div class="box1 flex items-center">
                <img src="../assets/admin/booking-icon.svg" alt="">
                <div class="buildig-type">Lux</div>
                <div class="buildig-name">12 - B1</div>
                <div class="status paid"></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
import BuildingModal from './BuildingModal.vue'
import PayModal from './PayModal.vue'

export default {
  components: {
    BuildingModal,
    PayModal
  },
  data () {
    return {
      building_modal: false,
      pay_modal: false
    }
  },
  methods: {
    show_pay_modal () {
      this.pay_modal = true
    },
    show_building_modal () {
      this.building_modal = true
    },
    setPeriod (start, end, start_offset, end_offset) {
      start += 1
      end += 1
      start_offset -= 1
      const week_days = 6
      return {
        'grid-column-start': start,
        'grid-column-end': end,
        left: `calc( (((100% / (${end} - ${start})) / ${week_days}) * ${start_offset}) )`,
        width: `calc((100% - ( (((100% / (${end} - ${start})) / ${week_days}) * ${start_offset}) )) + 
                (
                    (100% / (${end} - ${start})) / ${week_days}) * ${end_offset}
                )`
      }
    }
  }
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
.building-item {
    display: grid;
    grid-template-columns: 1fr repeat(5,1fr);
    grid-auto-rows: 40px;
    position: relative;
    transition: .15s;
}
.building-item:nth-child(2n+1) {
    background: #64646433;
}
.building-item:not(.building-item-header):hover {
    background: #0000004D;
}
.building-item > div {
    border-right: 1.5px solid #B6B6B6;
}
:root {
    --week-days: 6;
}
.period {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 5;
    position: absolute;
    top: 10px;
    left: calc( (((100% / (5 - 2)) / var(--week-days)) * 2) );
    width: calc(100% - (( (((100% / (5 - 2)) / var(--week-days)) * 1) ) + (( (((100% / (5 - 2)) / var(--week-days)) * 1) ) / 2)));
    height: 20px;
    background: #89DC62;
    border-radius: 3px;
    border: none !important;
    cursor: pointer;
}
.box1 {
    padding-left: 16px;
    padding-right: 20px;
}
.buildig-type {
    margin-left: 10px;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
}
.buildig-name {
    margin: auto;
}
.status {
    width: 13px;
    height: 13px;
    background: #B40D0DE5;
    border-radius: 50%;
}
.paid {
    background: #38B40DE5;
}

select {
    background: url(../assets/admin/angle-dow.svg) calc(100% - 5px) center/10px no-repeat;
    border: none;
    font-size: 14px;
    height: 22px;
    padding-left: 8px;
    padding-right: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
    position: relative;
}
.search-building {
    max-width: 100px;
    height: 20px;
    padding-left: 5px;
    padding-top: 4px;
    margin: auto;
    border: none;
    border-radius: 3px;
}
.month-name,
.week-days {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #5C5C5C;
}
.box2 {
    padding: 3px 5px;
}

</style>
