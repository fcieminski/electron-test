<template>
  <main class="main__image">
    <main-header @textSize="textSize" />
    <transition name="fade">
      <section v-if="!nextPage" class="main__section">
        <div class="section__box">
          <h2 :class="`text_${fontSize} mb-8`">Lorem isum dolor sit amet</h2>
          <div :class="`text_${fontSize} section__text`">
            consectetur adipisicing elit. Sequi accusantium architecto esse
            ducimus, autem harum quidem beatae nisi qui illo error aperiam rem
            nostrum, vel impedit dolor sint aliquid modi.Eaque dolore quia
            quibusdam autem suscipit excepturi consectetur, cum magnam laborum
            exercitationem quam labore odit veritatis placeat sint mollitia vel
            tempora error sit nemo earum! Voluptatum, reiciendis. Enim,
            consequuntur perferendis?
          </div>
          <button
            @click="nextPage = true"
            :class="`text_${fontSize} section__button mt-8`"
          >Lorem ipsum dolor</button>
        </div>
      </section>
    </transition>
    <transition name="fade">
      <movies @click="nextPage = false" v-if="nextPage" />
    </transition>
  </main>
</template>

<script>
import MainHeader from "./components/Header";
import Movies from "./views/Movies";

export default {
  components: {
    MainHeader,
    Movies
  },

  data: () => ({
    fontSize: "medium",
    nextPage: false
  }),

  methods: {
    textSize(value) {
      if (value) {
        this.fontSize = value === 1 ? "medium" : "big";
      } else {
        this.fontSize = "small";
      }
    }
  }
};
</script>

<style lang="scss" scope>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.main__section {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  .section__box {
    width: 50vw;
    margin-left: -100px;
    h2 {
      line-height: 0.7;
    }
    .text_small {
      font-size: 0.9rem;
    }
    .text_medium {
      font-size: 1.1rem;
    }
    .text_big {
      font-size: 1.5rem;
    }
  }
  .section__text {
    text-align: justify;
  }
  .section__button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    height: 35px;
    width: 250px;
  }
}
.main__image {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url("./img/testimage.jpeg") no-repeat center center fixed;
  background-size: cover;
}
</style>
