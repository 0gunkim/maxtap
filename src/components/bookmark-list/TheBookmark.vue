<template>
  <div class="l_the_book_mark">
    <BaseCard>
      <div class="article">
        <BaseButton @click="setTapTypeHandle('BookmarkStore')" :mode="'square'"
          >Bookmark List</BaseButton
        >
        <BaseButton @click="setTapTypeHandle('AddBookmark')" :mode="'square'"
          >Add Bookmark</BaseButton
        >
      </div>
    </BaseCard>
    <component :is="currentTabComponent"></component>
  </div>
</template>
<script lang="ts" setup>
import BookmarkStore from './BookmarkStore.vue'
import AddBookmark from './AddBookmark.vue'
import { ref, computed, type Ref, provide } from 'vue'

type TabKey = 'BookmarkStore' | 'AddBookmark'

const tabType: Ref<TabKey> = ref('BookmarkStore')

interface TabComponents {
  BookmarkStore: typeof BookmarkStore
  AddBookmark: typeof AddBookmark
}

const tabs: TabComponents = {
  BookmarkStore,
  AddBookmark
}
//computed
const currentTabComponent = computed(() => tabs[tabType.value])

//method
const setTapTypeHandle = (tab: TabKey) => {
  tabType.value = tab
}
const addBookmarkHandle = (title: string, description: string, link: string) => {
  const addBookmark = {
    id: new Date().toISOString(),
    title: title,
    description,
    link
  }
  bookmarks.value.unshift(addBookmark)
  tabType.value = 'BookmarkStore'
}
interface Bookmark {
  id: string
  title: string
  description: string
  link: string
}
//mock
const bookmarks = ref<Bookmark[]>([
  { id: '1', title: 'vue 공식문서', description: 'Max tap Vue.js', link: 'https://vue.js.org' },
  { id: '2', title: 'google 공식문서', description: ' google story', link: 'https://google.org' }
])
const deleteBookmarkHandle = (markId: string) => {
  const resIndex = bookmarks.value.findIndex((res) => res.id === markId)
  bookmarks.value.splice(resIndex, 1)
  console.log(bookmarks.value.length)
}

//provide
provide('bookmarks', { bookmarks, addBookmarkHandle, deleteBookmarkHandle })
</script>

<style scoped>
.l_the_book_mark {
  @apply p-4;
}
.article {
  @apply flex gap-6 justify-center text-gray-600;
}
</style>
