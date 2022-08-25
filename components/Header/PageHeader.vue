<template>
  <div class="columns is-align-items-center">
    <div class="column">
      <h1 class="is-size-4 is-flex is-align-items-center">
        <img
          v-if="icon"
          :src="icon"
          alt="Icon"
        />
        <span :class="{ 'ml-4': icon }">{{ title }}</span>
      </h1>
    </div>
    <div class="column has-text-left has-text-right-tablet">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    }
  }
}
</script>

<style>
</style>
