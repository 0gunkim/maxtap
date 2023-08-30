<template>
  <div class="l_the_book_mark">
    <BaseCard>
      <BaseButton @click="setTapTypeHandle('BookmarkStore')">Bookmark List</BaseButton>
      <BaseButton @click="setTapTypeHandle('AddBookmark')">Add Bookmark</BaseButton>
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

const currentTabComponent = computed(() => tabs[tabType.value as TabKey])

const setTapTypeHandle = (tab: TabKey) => {
  tabType.value = tab
}
const bookmarks = ref([
  { id: '1', title: 'vue 공식문서', description: 'Max tap Vue.js', link: 'https://vue.js.org' },
  { id: '2', title: 'google 공식문서', description: ' google story', link: 'https://google.org' }
])
provide('bookmarks', bookmarks)
</script>

<style scoped>
.l_the_book_mark {
  @apply p-2;
}
</style>
