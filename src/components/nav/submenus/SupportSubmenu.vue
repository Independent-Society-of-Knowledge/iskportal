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
  <div class="mx:px-[112px] py-[32px] mx:pl-[400px] xs:px-[64px] dark:bg-dark-90 bg-light-10
   border-b-[1px] border-b-light-40 dark:border-b-dark-50
   w-full">
    <nav-sub-menu-content-section title="Support" description="Support ISK financially">
      <nav-sub-menu-content-card title="Donations" description="One-time financial support"/>
      <nav-sub-menu-content-card title="Sponsor a Project"
                                 description="Sponsor a project you find demanding; or propose a new project and support it financially"/>
    </nav-sub-menu-content-section>
  </div>
</template>
<script setup>

import NavSubMenuContentSection from "@/components/nav/content/NavSubMenuContentSection.vue";
import NavSubMenuContentCard from "@/components/nav/content/NavSubMenuContentCard.vue";
</script>
<style scoped>

</style>