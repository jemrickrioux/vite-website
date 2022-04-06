<template>
  <div class="main">
    <div class="text">
      <Logo />
      <h1 class="logo-name">Stake Frites</h1>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "HeaderComponent",
  components: {
    Logo,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: stretch;
}
.text {
  color: black;
  font-size: 1.5em;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
