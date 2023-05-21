<template>
    <home-header @show-modal="show_form_modal" />
    <home-modal v-show="form_modal"  @hide-modal="hide_form_modal" />
    <home-about />
    <home-footer />
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeFooter from './HomeFooter.vue'
import HomeAbout from './HomeAbout.vue'
import HomeModal from './HomeModal.vue'

export default {
  components: {
    HomeHeader,
    HomeFooter,
    HomeAbout,
    HomeModal
  },
  data () {
    return {
      form_modal: false
    }
  },
  methods: {
    show_form_modal () {
      this.form_modal = true
    },
    hide_form_modal () {
      this.form_modal = false
    }
  }

}
</script>

<style>
body {
    background: rgb(248, 247, 247);
}

</style>
