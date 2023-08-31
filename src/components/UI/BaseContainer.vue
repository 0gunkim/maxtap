<template>
  <div class="container"><slot></slot></div>
</template>
<style scoped>
.container {
  @apply relative  w-5/12  h-[700px] mx-auto pt-8 px-6;
}
.container::before {
  content: ' ';
  @apply absolute inset-0 min-w-[300px] bg-gray-900 opacity-40  rounded-xl shadow-lg -z-10;
}
</style>
