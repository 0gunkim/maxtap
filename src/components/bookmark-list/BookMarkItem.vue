<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton type="button" mode="flat">delete</BaseButton>
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
<style scoped>
li {
  @apply m-auto max-w-2xl 
  /* max-width: 40rem; */;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  margin: 0.5rem 0;
}
</style>
