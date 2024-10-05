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
      class="h-[calc(100vh-64px)] lg:w-full   flex flex-row  w-full items-end  bg-cover about-background justify-start nuke-transition-productive-standard-moderate-01">
    <div class=" mx:px-[112px] xs:mx-0 xl:mx-[112px]  xs:px-16px   py-32px md:px-64px md:h-full xs:h-fit xs:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black   nuke-text-fluid-display-01 text-light-10  flex flex-col gap-64px justify-between
      ">
      <div class="nuke-text-fluid-display-01 h-full">
        Contribution
      </div>
      <div class="nuke-text-fluid-paragraph-01  max-w-[512px] ">
        From development project to research and free education, Independent Society of Knowledge is doing them through a
        global community of people, who care about knowledge and scientific inquiry. You can join this community by
        contributing to our open projects.
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-64px pt-64px lg:px-[112px] md:px-[64px] xs:px-16px mb-64px    text-dark-100 dark:text-light-10">
    <text-section title="Why should you care?" mode="fluid">
      One of the principles of Independent Society of Knowledge, is its collaborative manner. Much like the open-source
      projects. Each project in Independent Society of Knowledge is open for collaboration and contribution. But direct
      contribution isn’t the only way. One can contribute to ISK and its values via raising awareness about ISK, making
      showcases of the product or donating.
    </text-section>
    <div class="nuke-text-fluid-display-01">
      Become a contributor
    </div>
    <div class="flex lg:flex-row xs:flex-col gap-32px">
      <div id="development" class="flex flex-col gap-16px w-full h-full">
        <div class="nuke-text-fluid-heading-04">Development</div>
        <div class="nuke-text-heading-03">Get involved as a developer.</div>
        <link-referal text="Find projects that need you" href="google.com"/>
        <link-referal text="Contribution Guidelines" href="google.com"/>
        <link-referal text="Propose a feature" href="google.com"/>
        <link-referal text="Issue a bug" href="google.com"/>
        <link-referal text="Showcase your use" href="google.com"/>
      </div>
      <div id="edu-program" class="flex flex-col gap-16px w-full h-full">
        <div class="nuke-text-fluid-heading-04">Edu Program</div>
        <div class="nuke-text-heading-03">Make knowledge accessible.</div>
        <link-referal text="Educational Program" href="google.com"/>
        <link-referal text="Teaching Guidelines" href="google.com"/>
        <link-referal text="Propose a course" href="google.com"/>
      </div>
      <div id="research" class="flex flex-col gap-16px w-full h-full">
        <div class="nuke-text-fluid-heading-04">Research</div>
        <div class="nuke-text-heading-03">Solve the next problem.</div>
        <link-referal text="Research at ISK" href="google.com"/>
        <link-referal text="Propose a research plan" href="google.com"/>
        <link-referal text="Research Guidelines" href="google.com"/>
        <link-referal text="Find your research" href="google.com"/>
      </div>
      <div id="brand" class="flex flex-col gap-16px w-full h-full">
        <div class="nuke-text-fluid-heading-04">Design, Brand, and Marketing</div>
        <div class="nuke-text-heading-03">Make ISK visible.</div>
        <link-referal text="Educational Program" href="google.com"/>
        <link-referal text="Teaching Guidelines" href="google.com"/>
        <link-referal text="Propose a course" href="google.com"/>
      </div>
    </div>
    <text-section title="Find your place" mode="fluid">
      <div class="flex flex-col gap-16px">
        Get in touch with the team so that we can find you a place.
        <link-referal text="getInvolved@iskportal.com" href="mailto:getinvolved@iskportal.com"/>
        <link-referal text="dev@iskportal.com" href="mailto:dev@iskportal.com"/>
        <link-referal text="edu@iskportal.com" href="mailto:edu@iskportal.com"/>
        <link-referal text="research@iskportal.com" href="mailto:research@iskportal.com"/>
        <link-referal text="brand@iskportal.com" href="mailto:brand@iskportal.com"/>
      </div>
    </text-section>
  </div>
</template>
<script lang="ts" setup>
import TextSection from "@/components/TextSection.vue";
import GlassReferal from "@/components/GlassReferal.vue";
import LinkReferal from "@/components/LinkReferal.vue";
</script>
<style scoped>
.about-background{
  background-image: url("/annie-spratt-QckxruozjRg-unsplash.jpg");
}
</style>