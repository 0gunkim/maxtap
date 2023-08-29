<template id="app">
  <BookmarkStore :bookmarks="bookmarks" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import BookmarkStore from './components/bookmark-list/BookmarkStore.vue'
const bookmarks = ref([
  { id: '1', title: 'vue 공식문서', description: 'Max tap Vue.js', link: 'https://vue.js.org' },
  { id: '2', title: 'google 공식문서', description: ' google story', link: 'https://google.org' }
])
</script>
