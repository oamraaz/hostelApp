<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <div class="booking flex flex-col" @click.stop>
            <h2>Прибывающие</h2>

            <div class="booking-contact flex flex-col flex-fill">
                <input type="text" placeholder="Имя Фамилия" v-model="clientParams.name">
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Комната</label>
                <select v-model="clientParams.roomId">
                    <option v-for="room in rooms" :key="room.idType" :value="room.idType">{{ room.typeName }}</option>
                </select>
            </div>

            <div class="booking-contact flex flex-col">
                <label>3х разовое питание</label>
                <input type="checkbox" v-model="clientParams.isThreeTimes">
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Въезд</label>
                <input type="date" v-model="clientParams.checkIn" style="color: black;">
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Выезд</label>
                <input type="date" v-model="clientParams.checkout" style="color: black;">
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Кол-во взрослых:</label>
                <select v-model="clientParams.selectedAdultsCount">
                    <option v-for="adult in persons" :key="adult.number" :value="adult.number">{{ adult.number }}</option>
                </select>
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Кол-во детей:</label>
                <select v-model="clientParams.selectedChildrenCount">
                    <option v-for="kid in kids" :key="kid.number" :value="kid.number">{{ kid.number }}</option>
                </select>
            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <label>Сервисы</label>
           <select v-model="clientParams.selectedAdditionalService" multiple>
    <option v-for="additionalService in additionalServices" :key="additionalService.idService" :value="additionalService.idService">{{ additionalService.serviceName }}</option>
</select>

            </div>

            <div class="booking-contact flex flex-col flex-fill">
                <input type="button" value="Создать" @click="bookingCreate()"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import get from '../api/api'
import Cookies from 'js-cookie'

// Объекты
const clientParams = ref({
  name: '',
  roomId: 0,
  isThreeTimes: false,
  checkIn: '',
  checkout: '',
  selectedAdultsCount: 0,
  selectedChildrenCount: 0,
  selectedAdditionalService: []
})
// Массивы
const rooms = ref([])
const additionalServices = ref([])
const persons = ref([
  {
    number: 1
  },
  {
    number: 2
  },
  {
    number: 3
  },
  {
    number: 4
  }
])
const kids = ref([
  {
    number: 0
  },
  {
    number: 1
  },
  {
    number: 2
  },
  {
    number: 3
  }
])
// Счетчики
const selectedChildrenCount = ref(0)
const selectedAdultsCount = ref(0)
selectedAdultsCount.value = persons.value[0].number
selectedChildrenCount.value = kids.value[0].number
const token = JSON.parse(Cookies.get('user')).access_token
console.log(token)
onMounted(async () => {
  rooms.value = (await axios.get(get() + '/booking-service/booking/details/room/types')).data.data
  additionalServices.value = (await axios.get(get() + '/booking-service/booking/details/services')).data.data
})
async function bookingCreate () {
  const params = {
    room: {
      roomType: {
        idType: 2
      }
    },
    threeTimesMeal: false,
    checkIn: '2023-05-26T00:00:00',
    checkOut: '2023-05-26T00:00:00',
    adults: 2,
    kids: [
      {
        ageGroup: {
          idAgeGroup: 1,
          age: 6
        },
        numberOfKids: 1
      },
      {
        ageGroup: {
          idAgeGroup: 2,
          age: 12
        },
        numberOfKids: 2
      }
    ],
    additionalServices: [
      {
        idService: 1
      },
      {
        idService: 2
      }
    ],
    totalPrice: 2000.00
  }
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  }

  try {
    const response = await axios.post(get() + '/booking-service/booking/create', params, { headers })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
  // переход на страницу
}
</script>
<style scoped>
* {
    font-family: 'Roboto', sans-serif;
}

.status_info {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    background: #eeeeee;
    color: #333;
}

.booking-info {
    margin: 2rem 0;
}

.w-300 {
    width: 90px;
}

.fixed {
    background: rgba(0, 0, 0, 0.8);
}

.m-r-30 {
    margin-right: 2rem;
}

.booking-period {
    margin-top: 1rem;
}

.booking-period input {
    padding: 0.5rem;
    width: 90px;
    border-radius: 3px;
    font-size: 14px;
}

.booking-period span {
    font-weight: bold;
}

h2 {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 2rem;
    color: #333;
}

.booking {
    background: white;
    padding: 2.5rem;
    width: 700px;
    border-radius: 10px;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.booking-contact {
    margin-bottom: 2rem;
}

.booking-contact .name {
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
}

.booking-contact .contact {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
}

.price {
    padding: 1rem;
    font-weight: 700;
    line-height: 28px;
}

.price span {
    margin-left: 2rem;
}

.booking-btn {
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    height: 30px;
    color: #38B40D;
    background: #0DEE4C40;
    border-radius: 3px;
    transition: all 0.2s;
}

.booking-btn:hover {
    background: #0DEE4C;
    color: #fff;
}

.mini-status_info {
    display: inline-flex;
    align-items: center;
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
}

.paid {
    background: #0DEE4C40;
    color: #38B40D;
}

.unpaid {
    background: #EE0D0D3D;
    color: #B40D0D;
}

.partially_paid {
    background: #EAEE0D40;
    color: #A6B40D;
}

.card {
    margin-top: 2rem;
    background: #f5f5f5;
    padding: 0.5rem;
    max-width: 230px;
    min-width: 230px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #333;
}

.card-client {
    background: white;
    padding: 0.5rem;
    border-radius: 3px;
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 0.5rem;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.create-card-client {
    background: white;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    line-height: 13px;
    margin-bottom: 0.5rem;
    height: 16px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
