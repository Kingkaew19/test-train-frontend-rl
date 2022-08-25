<template>
  <div class="pb-4 pt-2 header">
    <div :class="headerBodyClasses">
      <h2 class="is-size-5" v-if="title">{{ title }}</h2>
      <slot name="title" />
      <div v-if="hasDefaultSlot">
        <slot />
      </div>
    </div>
    <div class="mt-2 divider-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    headerBodyClasses() {
      const classes = ['header-body']

      if (this.hasDefaultSlot) {
        classes.push('is-flex')
        classes.push('is-align-items-center')
        classes.push('is-justify-content-space-between')
      }

      return classes
    }
  },
}
</script>

<style lang="scss">
  @import '~assets/styleguides/styleguides';
  .header {
    .header-body {
      padding-top: 0;
      position: relative;
      z-index: 1;

      &:after {
        content: '';
        background-color: $color-red-21;
        width: 60px;
        height: 4px;
        display: block;
        position: absolute;
        bottom: -11px;
        left: 0;
      }
    }

    .divider-line {
      background-color: $color-red-6;
      width: 100%;
      height: 4px;
    }
  }
</style>
