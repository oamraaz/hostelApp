<template>
    <HomeHeader @show-modal="showFormModal" />
    <HomeModal v-show="formModal" @hide-modal="hideFormModal" />
    <BookingModal ref="target" v-if="bookingModal" @hide-modal="hideBookingModal" />
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
})
const formModal = ref(false)
const bookingModal = ref(false)
function showFormModal () {
  formModal.value = true
}
function hideFormModal () {
  formModal.value = false
}
function showBookingModal () {
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
