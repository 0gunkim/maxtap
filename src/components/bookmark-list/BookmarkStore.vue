<template>
  <BaseContainer>
    <ul v-for="bookmark in bookmarks" :key="bookmark.id">
      <BaseCard>
        <BookMarkItem
          :id="bookmark.id"
          :title="bookmark.title"
          :description="bookmark.description"
          :link="bookmark.link"
        />
      </BaseCard>
    </ul>
  </BaseContainer>
</template>
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import BookMarkItem from './BookMarkItem.vue'
interface IBookmark {
  id: string
  title: string
  description: string
  link: string
}

// defineProps<{ bookmarks: IBookmark[] }>()
const bookmarks: Ref = inject('bookmarks')!
</script>

<style scoped></style>
