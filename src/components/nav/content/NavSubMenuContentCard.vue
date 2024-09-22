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
  <div class=" w-[384px] h-full flex flex-col gap-[8px] p-8px
  nuke-transition-productive-standard-fast-01
  align-top
  text-dark-100 border-l-light-40 border-l-[1px] bg-none
  hover:bg-light-30 hover:border-l-primary-50
  active:bg-light-30 active:border-l-primary-50 active:border-l-[2px]

  dark:text-light-10 dark:border-l-dark-70
  hover:dark:bg-dark-70 hover:dark:border-l-primary-50

  ">
    <div class="nuke-text-heading-01 select-none">{{ title }}</div>
    <div class="nuke-text-helper-text-01 select-none">{{ description }}</div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      title: String,
      description: String
    }>(),
    {
      title: "Card Title",
      description: "Some default description"
    }
)
</script>

<style scoped>

</style>