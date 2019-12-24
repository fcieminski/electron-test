<template>
  <header>
    <div class="header__box">
      <div>
        <div>Martylologia</div>
        <div>Wsi polskich</div>
      </div>
      <div class="box__buttons">
        <div class="mr-6 d-flex">
          <button class="buttons__header buttons__header--active">pl</button>
          <button class="buttons__header">eng</button>
        </div>
        <div class="d-flex">
          <button class="buttons__header buttons__lang--small buttons__header--active">A</button>
          <button class="buttons__header buttons__lang--medium">A</button>
          <button class="buttons__header buttons__lang--big">A</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",

  data: () => ({}),

  computed: {},

  methods: {}
};
</script>

<style lang="scss" scope>
.header__box {
  margin: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
