<template>
  <BaseContainer>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description" rows="3" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="link" name="link" id="link" />
      </div>
      <div>
        <BaseButton :mode="'square'">북마크 추가하기</BaseButton>
      </div>
    </form>
  </BaseContainer>
</template>
<script lang="ts" setup></script>
