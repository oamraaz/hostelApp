<template>
    <home-header @show-modal="show_form_modal" />
    <home-modal v-show="form_modal" @hide-modal="hide_form_modal" />
    <booking-modal v-show="booking_modal" @hide-modal="hide_booking_modal" />
    <room-content @show-modal="show_booking_modal" />
    <home-footer />
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeFooter from './HomeFooter.vue'
import RoomContent from './RoomContent.vue'
import HomeModal from './HomeModal.vue'
import BookingModal from './BookingModal.vue'

export default {
  components: {
    HomeHeader,
    HomeFooter,
    RoomContent,
    HomeModal,
    BookingModal
  },
  data () {
    return {
      form_modal: false,
      booking_modal: false
    }
  },
  methods: {
    show_form_modal () {
      this.form_modal = true
    },
    hide_form_modal () {
      this.form_modal = false
    },
    show_booking_modal () {
      this.booking_modal = true
    },
    hide_booking_modal () {
      this.booking_modal = false
    }
  }

}
</script>

<style>
body {
    background: rgb(248, 247, 247);
}
</style>
