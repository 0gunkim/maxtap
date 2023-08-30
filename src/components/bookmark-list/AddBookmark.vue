<template>
  <BaseContainer>
    <form @submit.prevent="submitHandle">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="enterTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description" rows="3" ref="enterDescription" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="link" name="link" id="link" ref="enterLink" />
      </div>
      <div>
        <BaseButton :mode="'square'">북마크 추가하기</BaseButton>
      </div>
    </form>
  </BaseContainer>
</template>

<script lang="ts" setup>
import { inject, ref, type Ref } from 'vue'
interface addBookmarkType {
  addBookmarkHandle: (title: string, description: string, link: string) => void
}
const enterTitle: Ref<HTMLInputElement | null> = ref(null)
const enterDescription: Ref<HTMLInputElement | null> = ref(null)
const enterLink: Ref<HTMLInputElement | null> = ref(null)
const emitBookmark = inject<addBookmarkType>('bookmarks')

const submitHandle = () => {
  const title = enterTitle.value ? enterTitle.value.value : ''
  const description = enterDescription.value ? enterDescription.value.value : ''
  const link = enterLink.value ? enterLink.value.value : ''
  if (emitBookmark) {
    const { addBookmarkHandle } = emitBookmark
    addBookmarkHandle(title, description, link)
  }
}
</script>
<style scoped>
form {
  @apply flex flex-col justify-center items-center mx-auto;
}
.from-control,
label {
  @apply block flex-col justify-center;
}
</style>
