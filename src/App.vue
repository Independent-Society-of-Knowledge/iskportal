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
  <div class="w-full h-fit flex flex-col dark:bg-dark-80 bg-light-10 m-0 p-0">
    <div  id='header' class="w-full App__nav ">
      <Navbar/>
    </div>
    <div class="w-full h-fit flex flex-col p-0 m-0 App__main"
    >
        <router-view/>
    </div>

    <Footer class="App__footer"/>
  </div>

</template>
<script setup>
import Navbar from "@/components/nav/Navbar.vue";
import Footer from "@/components/Footer.vue";
import GeneralMarkDownTemplate from "@/components/GeneralMarkDownTemplate.vue";
import HomePage from "@/pages/HomePage.vue";
import AboutUs from "@/pages/AboutUs.vue";
import GetInvolved from "@/pages/GetInvolved.vue";
import Contribution from "@/pages/get-involved/Contribution.vue";
</script>

<style scoped>

</style>
