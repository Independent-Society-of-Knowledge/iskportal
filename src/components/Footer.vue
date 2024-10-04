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
      class="mx:px-[112px] md:px-[64px] py-64px xs:px-16px flex flex-col gap-[64px] bg-dark-50 dark:bg-dark-100 ">
    <div class="flex xl:flex-row xs:flex-col    lg:gap-32px xs:gap-8px">
    <div class="text-dark-60 w-fit justify-end flex">
      <SvgISKLogo width="20vw"/>
    </div>
      <div class="flex lg:flex-col xs:flex-wrap gap-8px ">
        <div class="nuke-text-body-01 text-light-10 dark:text-light-100 px-16px">About</div>
        <FooterButton>Overview</FooterButton>
        <FooterButton>Foundations</FooterButton>
        <FooterButton>Identity</FooterButton>
        <FooterButton>Brand</FooterButton>
        <FooterButton>Membership Policy</FooterButton>
        <FooterButton>Initiative Document</FooterButton>
      </div>
      <div class="flex lg:flex-col xs:flex-wrap gap-8px">
        <div class="nuke-text-body-01 text-light-10 dark:text-light-100 px-16px">Contact</div>
        <FooterButton>For Organizations</FooterButton>
        <FooterButton>For Teams and Research Groups</FooterButton>
        <FooterButton>Individuals</FooterButton>
        <FooterButton>Propose</FooterButton>
        <FooterButton>Funders and Sponsors</FooterButton>
      </div>
      <div class="flex lg:flex-col xs:flex-wrap gap-8px ">
        <div class="nuke-text-body-01 text-light-10 dark:text-light-100 px-16px">Partners</div>
        <FooterButton>Official Members</FooterButton>
        <FooterButton>Partners</FooterButton>
        <FooterButton>Organizations</FooterButton>
        <FooterButton>Sponsors</FooterButton>
      </div>
      <div class="flex lg:flex-col xs:flex-wrap gap-8px ">
        <div class="nuke-text-body-01 text-light-10 dark:text-light-100 px-16px">Funds</div>
        <FooterButton>Funding</FooterButton>
        <FooterButton>Sponsorship</FooterButton>
        <FooterButton>Donations</FooterButton>
        <FooterButton>Financial Reports</FooterButton>
      </div>
      <div class="flex lg:flex-col xs:flex-wrap gap-8px ">
        <div class="nuke-text-body-01 text-light-10 dark:text-light-100 px-16px">Terms</div>
        <FooterButton>Terms of Use</FooterButton>
        <FooterButton>License</FooterButton>
        <FooterButton>Privacy Policy</FooterButton>
        <FooterButton>Accessibility</FooterButton>
        <FooterButton>Cookie Preferences</FooterButton>
      </div>
    </div>
    <div class="nuke-text-legal-01 flex items-center justify-center text-dark-10">
      All rights reserved for the Independent Society of Knowledge
    </div>
  </div>
</template>
<script setup>
import SvgISKLogo  from "@/assets/brand-assets/logo-serif-full.svg"
import FooterButton from "@/components/FooterButton.vue";
</script>
<style scoped>
</style>