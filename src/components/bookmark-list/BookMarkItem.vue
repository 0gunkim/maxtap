<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton type="button" @click="deleteBookmarkHandle(id)" mode="flat">delete</BaseButton>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">{{ link }}</a>
      </nav>
    </div>
  </li>
</template>
<script lang="ts" setup>
import { inject } from 'vue'

interface IBookMarkProps {
  id: string
  title: string
  description: string
  link: string
}
interface IBookmarkContext {
  bookmarks: IBookMarkProps[]
  deleteBookmarkHandle: (id: string) => void
}
defineProps<IBookMarkProps>()
const injectDel = inject<IBookmarkContext>('bookmarks')!
const { deleteBookmarkHandle } = injectDel
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
