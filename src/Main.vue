<template>
  <main class="main__image">
    <main-header />
  </main>
</template>

<script>
import MainHeader from "./components/Header";
export default {
  components: {
    MainHeader
  }
};
</script>

<style lang="scss" scope>
.main__image {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url("./img/testimage.jpeg") no-repeat center center fixed;
  background-size: cover;
}
</style>
