<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>delete</button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">{{ link }}</a>
      </nav>
    </div>
  </li>
</template>
<script lang="ts" setup>
interface BookMarkProps {
  id: string
  title: string
  description: string
  link: string
}
defineProps<BookMarkProps>()
</script>
<style scoped></style>
