<template>
  <section class="movies__section">
    <button class="movies__button" @click="$emit('click')">Go Back</button>
    <div v-dragscroll class="movies">
      <div class="pr-4 ml-4">
        <video class="movie__box" width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="pr-4">
        <video class="movie__box" width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="pr-4">
        <video class="movie__box" width="500px" src="../img/video.mp4"></video>
        Lorem
      </div>
      <div class="pr-4">
        <video class="movie__box" width="500px" src="../img/video.mp4"></video>
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
  .movies__button {
    position: fixed;
    top: 25px;
    z-index: 10;
  }
  .movies {
    display: flex;
    overflow: auto;
    width: 100vw;
    padding-bottom: 24px;
    .movie__box {
      border-radius: 10px;
    }
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