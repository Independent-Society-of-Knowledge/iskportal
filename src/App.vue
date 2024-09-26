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
  <div class="w-full h-fit flex flex-col dark:bg-dark-100 m-0 p-0 gap-128px">

    <div class="w-full hero-and-navbar">
      <Navbar/>
      <hompage-hero-section/>
    </div>
    <div class="mx:px-[112px] md:px-[64px] py-64px xs:px-8px flex flex-col  xs:gap-[64px]">
      <TextSection title="Knowledge, Unchained">
        The Independent Society of Knowledge is a movement, through which, an alternative route to scientific inquiry is
        established. It is a community driven organization that seeks a new wave in academia by solving its problems and
        offering new ideas.
      </TextSection>
      <TextSection title="Solutions" mode="vertical">
        Our solutions empower researchers with state-of-the-art resources, from computational packages to collaborative environments.
      </TextSection>
    </div>
  </div>

</template>
<script setup>

import TextSection from "@/components/TextSection.vue";
import HompageHeroSection from "@/components/HeroSections/HompageHeroSection.vue";
import Navbar from "@/components/nav/Navbar.vue";
</script>

<style scoped>
.hero-and-navbar{
  height: calc(100vh - 64px);
}
</style>
