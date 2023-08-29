<template id="app">
  <ul v-for="bookmark in bookmarks" :key="bookmark.id">
    <BookMarkItem
      :id="bookmark.id"
      :title="bookmark.title"
      :description="bookmark.description"
      :link="bookmark.link"
    />
  </ul>
</template>
<script lang="ts" setup>
import BookMarkItem from './components/bookmark-list/BookMarkItem.vue'
import { ref } from 'vue'
const bookmarks = ref([
  { id: '1', title: 'vue 공식문서', description: 'Max tap Vue.js', link: 'https://vue.js.org' },
  { id: '2', title: 'google 공식문서', description: ' google story', link: 'https://google.org' }
])
</script>
