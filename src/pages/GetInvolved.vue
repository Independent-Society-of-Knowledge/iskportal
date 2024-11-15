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
      class="h-[calc(100vh-64px)] lg:w-full   flex flex-row  w-full items-start  bg-cover about-background justify-end nuke-transition-productive-standard-moderate-01">
    <div class=" mx:px-[112px] xs:mx-0 xl:mx-[112px]  xs:px-16px   py-32px md:px-64px md:h-full xs:h-fit xs:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black nuke-text-fluid-display-01 text-light-10  flex flex-col gap-64px justify-between
      ">
      <div class="nuke-text-fluid-display-01 h-full">
        Get<br> Involved
      </div>
      <div class="nuke-text-fluid-paragraph-01  max-w-[512px] ">
        Independent Society of Knowledge looks actively for potential collaborations, and contributors. In Our mind, a
        global effort is what makes ISK special.
      </div>
    </div>
    <div class="flex flex-col w-full h-full max-w-[50%]">
      <glass-referal title="Collaboration" link="/get-involved/collaboration"/>
      <glass-referal title="Contribution" link="/get-involved/contribution"/>
    </div>
  </div>
</template>
<script setup>

import GlassReferal from "@/components/GlassReferal.vue";
</script>

<style scoped>
.about-background {
  background-image: url("/nasa-Q1p7bh3SHj8-unsplash.jpg");
}

</style>