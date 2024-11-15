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
      class="h-[calc(100vh-64px)] lg:w-full   flex lg:flex-row xs:flex-col  w-full items-end  bg-cover collaboration-background justify-between
        nuke-transition-productive-standard-moderate-01">
    <div class=" mx:px-[112px] xs:mx-0 xl:mx-[112px]  xs:px-16px   py-32px md:px-64px md:h-full xs:h-fit xs:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black   nuke-text-fluid-display-01 text-light-10  flex flex-col gap-64px justify-between
      ">
      <div class="nuke-text-fluid-display-01 h-full">
        Collaboration
      </div>
      <div class="nuke-text-fluid-paragraph-01  max-w-[512px] ">
        ISK is an idea. And we make it actualized together. Helps us create Independent Society of Knowledge by becoming a partner of our mission.
      </div>
    </div>
    <div class=" flex flex-col lg:w-[256px] xs:w-full lg:h-full xs:h-fit  justify-end">
  <div class="h-full"/>
      <a class="h-fit w-full backdrop-blur-[2px]" href="https://init.iskportal.com/collaboration-with-other-organizations.html">
        <div class="
  nuke-transition-productive-standard-moderate-01 backdrop-blur-[1px] dark:hover:bg-dark-100
  w-full h-fit justify-between
  xs:p-16px
  xl:py-32px flex flex-row
  text-light-10 hover:text-dark-100 dark:hover:text-light-10
  xl:border-light-100 xl:border-[1px]
  hover:bg-light-10">
          <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03">
            Learn More
          </div>
          <slot/>
          <div class="w-full xs:h-[16px] xl:h-[24px] flex justify-end">
            <SvgArrowLeft height="100%"/>
          </div>

        </div>
      </a>
    </div>
  </div>

</template>
<script setup>
import SvgArrowLeft from "@/assets/icons/arrow--right.svg?component"

</script>

<style scoped>
.collaboration-background{
  background-image: url("/kaleidico-3V8xo5Gbusk-unsplash.jpg");
  background-position: left;
}
</style>