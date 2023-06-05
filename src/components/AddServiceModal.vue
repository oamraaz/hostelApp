<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <div class="booking flex flex-col" @click.stop>
            <div class="flex">
                <div class="booking-contact flex flex-col">
                <label>Услуга:</label>
                <select v-model="serviceParams.idService">
                    <option v-for="service in services" :key="service.idService" :value="service.idService">{{ service.serviceName }}</option>
                </select>
                </div>
            </div>
            <div class="flex">
                <div class="booking-contact flex flex-col">
                    <input type="button" value="Создать" @click="addServiceForClient()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
// Объекты
const serviceParams = ref({})
// Массивы
const services = ref([])
onMounted(async () => {
  services.value = (await axios.get('http://localhost:9009/booking-service/booking/details/services')).data.data
})
async function addServiceForClient () {
  const test = await axios.get('http://localhost:9009/booking-service/booking/update',
    {
      params: {
        room: serviceParams.value.roomId,
        threeTimesMeal: serviceParams.value.isThreeTimes,
        checkIn: serviceParams.value.checkIn,
        checkOut: serviceParams.value.checkout,
        adults: serviceParams.value.selectedAdultsCount,
        kids: serviceParams.value.selectedChildrenCount,
        additionalServices: serviceParams.value.selectedAdditionalService
      }
    })
  console.log(test)
  // переход на страницу
}
</script>
<style scoped>
.status_info {
    display: inline-flex;
    align-items: center;
    height: 25px;
    white-space: nowrap;
    border-radius: 3px;
    padding: 0 15px;
    background: rgba(234, 238, 13, 0.25);
    color: #A6B40DE5;
}
.booking-info {
    margin-top: 26px;
    margin-bottom: 36px;
}
.w-300 {
    width: 90px;
}
.fixed {
    background: rgba(0, 0, 0, 0.571);
}
.m-r-30 {
    margin-right: 30px;
}
.booking-period {
    margin-top: 15px;
}
.booking-period input {
    padding: 0 0 1px 5px;
    width: 90px;
    border-radius: 3px;
    font-size: 14px;
}
.booking-period span {
    font-family: 'Inter';
    font-weight: 600;
}

h2 {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 25px;
}

.booking {
    background: white;
    padding: 45px 45px 20px;
    width: 700px;
    border-radius: 10px;
    color: #3A3943;
}
.buildig-type {
    font-size: 16px;
}

.booking-contact {
    margin-bottom: 40px;
}

.booking-contact .name {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
}

.booking-contact .contact {
    margin-top: 20px;
    font-family: 'Inter';
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    /*border-bottom: 1px solid #8CAA14;*/
}

.price {
    padding: 20px;

    font-family: 'Roboto';
    font-weight: 700;
    line-height: 28px;
}

.price span {
    margin-left: 30px;
}

.booking-btn {
    font-family: 'Roboto';
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    padding: 0 13px;

    color: rgba(56, 180, 13, 0.9);
    background: rgba(13, 238, 76, 0.25);
    border-radius: 3px;
}

.mini-status_info {
    display: inline-flex;

    /*height: 12px;*/
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

.card {
    margin-top: 30px;
    background: #ccc;
    padding: 8px;
    max-width: 230px;
    min-width: 230px;
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

</style>
