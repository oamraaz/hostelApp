<template>
    <HomeHeader @show-modal="showFormModal" />
    <HomeModal v-show="formModal" @hide-modal="hideFormModal" />
    <BookingModal ref="target" v-if="bookingModal" v-model="booking" @hide-modal="hideBookingModal" />
    <RoomContent v-model="rooms" @show-modal="showBookingModal" />
    <HomeFooter />
</template>

<script setup>
import HomeHeader from './HomeHeader.vue'
import HomeFooter from './HomeFooter.vue'
import RoomContent from './RoomContent.vue'
import HomeModal from './HomeModal.vue'
import BookingModal from './BookingModal.vue'
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import get from '../api/api'
import axios from 'axios'
const props = defineProps(['query'])

const rooms = ref()
onMounted(async () => {
  console.log(props)
  if (props.query !== '') {
    const params = JSON.parse(props.query)
    const { data: { data: result } } = await axios.get(get() + '/booking-service/booking/available/rooms',
      {
        params: {
          checkIn: new Date(params.checkIn),
          checkOut: new Date(params.checkOut),
          roomType: params.roomId,
          persons: params.personCount
        }
      })
    rooms.value = result
  }
})
const booking = ref()
const formModal = ref(false)
const bookingModal = ref(false)
function showFormModal () {
  formModal.value = true
}
function hideFormModal () {
  formModal.value = false
}
function showBookingModal (data) {
  const params = JSON.parse(props.query)
  booking.value = {
    ...data,
    checkIn: new Date(params.checkIn).toISOString().slice(0, 19),
    checkOut: new Date(params.checkOut).toISOString().slice(0, 19)
  }
  bookingModal.value = true
}
function hideBookingModal () {
  bookingModal.value = false
}

const target = ref(null)

onClickOutside(target, (event) => console.log(event))
</script>

<style>
body {
    background: rgb(248, 247, 247);
}
</style>
