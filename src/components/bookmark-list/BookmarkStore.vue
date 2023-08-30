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
interface BookmarkContext {
  bookmarks: IBookmark[]
  addBookmarkHandle: (title: string, description: string, link: string) => void
}

// defineProps<{ bookmarks: IBookmark[] }>()
const bookmarkList = inject<BookmarkContext>('bookmarks')!
const { bookmarks } = bookmarkList
</script>

<style scoped></style>
