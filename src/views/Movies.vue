<template>
  <section class="movies__section">
    <button @click="$emit('click')">Go Back</button>
    <div v-dragscroll class="movies">
      <div class="mr-4">
        <video width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="mr-4">
        <video width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="mr-4">
        <video width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="mr-4">
        <video width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
    </div>
  </section>
</template>

<script>
import { dragscroll } from "vue-dragscroll";

export default {
  name: "Movies",

  directives: {
    dragscroll
  },

  data: () => ({}),

  methods: {}
};
</script>

<style lang="scss" scope>
.movies__section {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  .movies {
    display: flex;
    overflow: auto;
    width: 100vw;
    padding-bottom: 24px;
    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #ddd;
    }

    &::-webkit-scrollbar-thumb {
      background: #666;
    }
  }
}
</style>