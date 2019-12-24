<template>
  <header class="header">
    <div class="header__box">
      <div class="box__title">
        <div class="mb-2">Martylologia</div>
        <div class="mt-2">Wsi polskich</div>
      </div>
      <div class="box__buttons">
        <div class="mr-6 d-flex">
          <button
            @click="language = 0"
            :class="[
              language === 0 && 'buttons__header--active',
              'buttons__header mr-2'
            ]"
          >pl</button>
          <button
            @click="language = 1"
            :class="[
              language === 1 && 'buttons__header--active',
              'buttons__header'
            ]"
          >eng</button>
        </div>
        <div class="d-flex">
          <button
            @click="changeTextSize(0)"
            :class="[
              textSize === 0 && 'buttons__header--active',
              'buttons__header mr-2 buttons__lang--small'
            ]"
          >A</button>
          <button
            @click="changeTextSize(1)"
            :class="[
              textSize === 1 && 'buttons__header--active',
              'buttons__header mr-2 buttons__lang--medium'
            ]"
          >A</button>
          <button
            @click="changeTextSize(2)"
            :class="[
              textSize === 2 && 'buttons__header--active',
              'buttons__header buttons__lang--big'
            ]"
          >A</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",

  data: () => ({
    language: 0,
    textSize: 1
  }),

  computed: {},

  methods: {
    changeTextSize(size) {
      this.textSize = size;
      this.$emit("textSize", size);
    }
  }
};
</script>

<style lang="scss" scope>
.header {
  position: fixed;
  width: 100%;
}
.header__box {
  margin: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .box__title {
    color: white;
  }
  .box__buttons {
    display: flex;
    .buttons__header {
      width: 40px;
      height: 40px;
      border: 1px solid white;
      background-color: black;
      color: white;
      font-size: 0.8rem;
      display: block;
      justify-content: center;
      &:hover {
        background-color: #a9a9a9;
        color: black;
        cursor: pointer;
      }
      &.buttons__header--active {
        background-color: #a9a9a9;
        color: black;
      }
      &.buttons__lang {
        &--small {
          font-size: 0.8rem;
        }
        &--medium {
          font-size: 1rem;
        }
        &--big {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
