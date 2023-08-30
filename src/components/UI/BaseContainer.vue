<template>
  <div class="container"><slot></slot></div>
</template>
<style scoped>
.container {
  @apply relative  w-5/12 h-[700px] mx-auto pt-8;
}
.container::before {
  content: ' ';
  @apply absolute inset-0 bg-gray-900 opacity-50  rounded-xl shadow-lg -z-10;
}
</style>
