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
      class="h-[calc(100vh-64px)] lg:w-full   flex flex-col  items-start  bg-cover about-background justify-end nuke-transition-productive-standard-moderate-01">
    <div class=" mx:px-[112px] xs:mx-0 xl:mx-[112px]  xs:px-16px   py-32px md:px-64px md:h-full xs:h-fit xs:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black   nuke-text-fluid-display-01 text-light-10  flex flex-col gap-64px justify-between
      ">
      <div class="nuke-text-fluid-display-01 h-full">
        About <br> Independent <br> Society of <br> Knowledge
      </div>
      <div class="nuke-text-fluid-paragraph-01  max-w-[512px] ">
        The Independent Society of Knowledge is a movement, through which, an alternative route to scientific inquiry is
        established.
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-64px pt-64px lg:px-[112px] md:px-[64px] xs:px-16px    text-dark-100 dark:text-light-10">
    <div class="flex xs:flex-col lg:flex-row gap-16px">
      <div  mode="vertical" class="bg-dark-70 p-32px nuke-text-fluid-paragraph-01 flex flex-col gap-16px">
        <div class="nuke-text-heading-03  p-16px pl-8px w-fit bg-light-10  text-dark-100">As an Idea</div>
        Any society that operates under the principles of open collaboration in science can be called an Independent
        Society of Knowledge. These societies, rely on voluntary contributions from
        diverse participants who work together without formal hierarchies or price-based coordination. Their goal is to
        produce and share scientific knowledge as a common good, freely accessible to all.
        This decentralized approach encourages innovation and the collective refinement of ideas, breaking traditional barriers to the flow of
        information and advancing knowledge in an open and unrestricted manner.

      </div>
      <div  mode="vertical" class="bg-light-40 text-dark-100 p-32px nuke-text-fluid-paragraph-01 flex flex-col gap-16px">
        <div class="nuke-text-heading-03 p-16px pl-8px w-fit bg-dark-100  text-light-10">As an Organization</div>
        We, as the Independent Society of Knowledge (ISK), represent the first actualization of this visionary concept.
        Our organization embodies the principles of open collaboration, uniting individuals from diverse fields to freely
        share, produce, and refine knowledge without the constraints of traditional structures. By fostering a
        decentralized and voluntary community, ISK strives to make scientific knowledge universally accessible, breaking
        down barriers and encouraging innovation. As pioneers of this movement, we aim to create a space where ideas flow
        unchained, empowering contributors and non-contributors alike to engage with and benefit from the collective
        growth of knowledge.
      </div>
    </div>
    <div class=" flex flex-row text-dark-100 dark:text-light-10">
      <div class="flex flex-row justify-end items-end  gap-32px min-h-screen bg-cover oppenheimer-picture ">
        <div class="h-full w-full"/>
        <div class="h-fit w-full p-16px flex flex-col gap-16px bg-light-30 dark:bg-dark-100 ">
          <div class="nuke-text-fluid-quotation-01 nuke-text-serif">
            “There must be no barriers to freedom of inquiry; There is no place for dogma in science. The scientist is
            free,
            and must be free to ask any question, to doubt any assertion, to seek for any evidence, to correct any
            errors.”
          </div>
          <div class="nuke-text-fluid-heading-03">
            - J. Robert Oppenheimer
          </div>
        </div>
      </div>
      <!--      <div class="w-full h-full"></div>-->
    </div>
  </div>
</template>
<script setup>

import TextSection from "@/components/TextSection.vue";
</script>

<style scoped>
.about-background {
  background-image: url("@/assets/brand-assets/ISK-Brand.jpg");
}

.oppenheimer-picture {
  background-image: url("@/assets/brand-assets/D98882.jpg");
}
</style>