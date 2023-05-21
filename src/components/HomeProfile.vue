<template>
    <home-header :isAuthorized="true"/>
    <booking-modal v-show="booking_modal" @hide-modal="hide_booking_modal" />
    <profile-content @show-modal="show_booking_modal" />
    <home-footer />
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeFooter from './HomeFooter.vue'
import ProfileContent from './ProfileContent.vue'
import HomeModal from './HomeModal.vue'
import BookingModal from './BookingModal.vue'

export default {
  components: {
    HomeHeader,
    HomeFooter,
    ProfileContent,
    HomeModal,
    BookingModal
  },
  data () {
    return {
      booking_modal: false
    }
  },
  methods: {
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
