<!--
  - Copyright © 2024 Independent Society of Knowledge
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU General Public License as published by
  - the Free Software Foundation, either version 2 of the License, or
  - (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU General Public License
  - along with this program. If not, see <https://www.gnu.org/licenses/>.
  -
  - Contact Information:
  - Independent Society of Knowledge
  - Email: projects@iskportal.com
  -
  - SPDX-License-Identifier: GPL-2.0-or-later
  -
  - Developed by: Amir H. Ebrahimnezhad (if you helped or your commits are going to be pulled please add your name and email with a comma.)
  - Email:        ceo@iskportal.com
  - version 1.0.0
  -
  -->
<template>
  <div
      class="xs:p-0 md:px-16px lg:px-[256px] w-full h-[calc(75vh-64px)] header flex flex-col justify-end items-center align-bottom bg-cover"
      :style="{
      backgroundImage: `url(${imageURL})`
    }"
  >
    <div class="w-full bg-black nuke-text-fluid-display-03 text-light-10 p-32px">
      {{ title }}
    </div>
  </div>
  <div
      class="xs:p-0 md:px-16px lg:px-[256px] w-full dark:text-light-10 text-dark-100 pt-[64px] flex flex-row content-holder">

  </div>
  <div v-html="renderedMarkdown" class="xs:px-16px lg:px-[256px] press" />
  <!--  <div v-html="require(`!html-loader!markdown-loader!../../public/blogs/${content}`)" class="text-light-10 markdown-container"/>-->
</template>
<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import {marked} from "marked";


const props = defineProps<{
  imageName: string,
  title: string,
  contentName: string
}>()

const imageURL = computed(() => {
  return `../../blogs/images/${props.imageName}`
})

const contentURL = computed(()=> {
  return `/blogs/${props.contentName}.md`
})
const markdownContent = ref<string>('');
const renderedMarkdown = ref<any>(''); // I assume marked returns string HTML

fetch(contentURL.value)
    .then(response => response.text())
    .then(data => {
      markdownContent.value = data;  // Assign the fetched markdown content
      renderedMarkdown.value = marked.parse(markdownContent.value); // Parse and render markdown
    })
    .catch(err => console.error(err));

</script>

<style scoped lang="scss">

</style>
