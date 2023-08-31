<template>
  <BaseDialog v-if="inputIsInvalid" title="Invaild Input" @close="confirmHandle">
    <template #default>
      <p>입력이 비어 있습니다.</p>
      <p>입력칸이 비어있으면 저장이 안됩니다.</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmHandle"> 확인 </BaseButton>
    </template>
  </BaseDialog>
  <BaseContainer>
    <form @submit.prevent="submitHandle">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" placeholder="사이트 이름" ref="enterTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="간단한 설명 넣기 (3줄까지만 가능해요)"
          rows="3"
          ref="enterDescription"
        />
      </div>
      <div class="form-control">
        <label for="link">URL</label>
        <input
          type="link"
          name="link"
          id="link"
          placeholder="ex) http://google.com"
          ref="enterLink"
        />
      </div>
      <div class="font-bold">
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
const inputIsInvalid = ref(false)
const emitBookmark = inject<addBookmarkType>('bookmarks')

const submitHandle = () => {
  const title = enterTitle.value ? enterTitle.value.value : ''
  const description = enterDescription.value ? enterDescription.value.value : ''
  const link = enterLink.value ? enterLink.value.value : ''
  if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
    inputIsInvalid.value = true
    return
  } else if (emitBookmark) {
    const { addBookmarkHandle } = emitBookmark
    addBookmarkHandle(title, description, link)
  }
}

const confirmHandle = () => {
  inputIsInvalid.value = false
}
</script>
<style scoped>
form {
  @apply flex flex-col justify-center items-center mx-auto gap-10;
}
.from-control,
label {
  @apply block flex-col justify-center;
}
input,
textarea {
  @apply w-96;
}
</style>
