<template>
  <ul v-for="bookmark in bookmarks" :key="bookmark.id">
    <BookMarkItem
      :id="bookmark.id"
      :title="bookmark.title"
      :description="bookmark.description"
      :link="bookmark.link"
    />
  </ul>
</template>
<script setup lang="ts">
import BookMarkItem from './BookMarkItem.vue'

interface IBookmark {
  id: string
  title: string
  description: string
  link: string
}

defineProps<{ bookmarks: IBookmark[] }>()
</script>
