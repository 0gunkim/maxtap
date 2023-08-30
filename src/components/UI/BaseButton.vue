<template>
  <button :type="type" :class="mode"><slot></slot></button>
</template>
<!-- 프로퍼티 말고 slot을 사용하는 이유: 유연성 -->
<script lang="ts" setup>
type TButtonType = 'button' | 'submit' | 'reset' | undefined
type TClassType = 'flat' | 'square'
interface IBaseButtonType {
  type: TButtonType
  mode: TClassType
}
defineProps<IBaseButtonType>()
</script>

<style scoped>
.flat {
  @apply shadow-gray-100 shadow-sm p-2 rounded-full ease-in duration-700;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
}
.flat:hover {
  color: black;
  @apply bg-yellow-100 opacity-20;
}
.flat:hover::before {
  content: 'really?  ';
}
.square {
  @apply shadow-gray-500 shadow-sm p-4 rounded-sm ease-in duration-700;
}
.square:focus {
  @apply bg-gray-500;
}
</style>
