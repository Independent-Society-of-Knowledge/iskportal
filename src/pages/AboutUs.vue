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
      <div mode="vertical"
           class="bg-light-40 text-dark-100 p-32px nuke-text-fluid-paragraph-01 w-full flex flex-col gap-16px">
        <div class="nuke-text-heading-03 p-16px w-fit bg-dark-100  text-light-10">Vision</div>
        We envision a decentralization in science and a collaborative route for its inquiry.
      </div>
      <div mode="vertical" class="bg-dark-70 p-32px nuke-text-fluid-paragraph-01 text-light-10 flex flex-col w-full gap-16px">
        <div class="nuke-text-heading-03  p-16px w-fit bg-light-10  text-dark-100">Mission</div>
        We bring together necessary technologies and platforms to make knowledge inquiry more dynamic and natural.
      </div>
    </div>
    <TextSection mode="fluid" title="Overview">
      The Independent Society of Knowledge (ISK) is an organization dedicated to scientific inquiry through
      decentralized, collaborative, and open-access initiatives. It visions an alternative path in the scientific world
      through these basis. We seek these ideals by providing modern frameworks, software, education, and platforms for
      academics, researchers, and innovators to engage in community-driven projects that challenge traditional academic
      norms.
    </TextSection>
    <SectionsHolder/>
    <!-- Oppenheimer Quote !-->
    <div class=" flex flex-row text-dark-100 dark:text-light-10">
      <div class="flex flex-row justify-end items-end  gap-32px min-h-screen  xs:bg-center lg:bg-top bg-cover oppenheimer-picture  ">
        <div class="h-full lg:w-full xs:w-0"/>
        <div class="h-fit w-full p-16px flex flex-col gap-16px bg-light-30 dark:bg-dark-100 ">
          <div class="nuke-text-fluid-quotation-01 nuke-text-serif">
            “There must be no barriers to freedom of inquiry; There is no place for dogma in science. The scientist is
            free,and must be free to ask any question, to doubt any assertion, to seek for any evidence, to correct any
            errors.”
          </div>
          <div class="nuke-text-fluid-heading-03">
            - J. Robert Oppenheimer
          </div>
        </div>
      </div>
      <!--      <div class="w-full h-full"></div>-->
    </div>
    <!-- Learn More !-->
    <TextSection mode="fluid" title="Learn More">
      You can find more about the organization, its mission and vision, reports and ongoing projects as well as
      proposals through these links.
    </TextSection>
  </div>
  <div class="w-full flex lg:flex-row xs:flex-col gap-0px pt-64px">
    <FooterCard title="Initiative" description="Read in full details about ISK." link="https://init.iskportal.com"
                class="w-full"/>
    <FooterCard title="Proposals" description="Learn more about our projects." link="https://init.iskportal.com"
                class="w-full"/>
    <FooterCard title="Funds" description="Learn more about sponsors of the society." link="https://init.iskportal.com"
                class="w-full"/>
    <FooterCard title="Brand Identity" description="About our design culture." link="https://init.iskportal.com"
                class="w-full"/>
  </div>
</template>
<script setup>
import TextSection from "@/components/TextSection.vue";
import FooterCard from "@/components/FooterCard.vue";
import SectionsHolder from "@/components/about-us/SectionsHolder.vue";
</script>

<style scoped>
.about-background {
  background-image: url("@/assets/brand-assets/ISK-Brand.jpg");
}

.oppenheimer-picture {
  background-image: url("@/assets/brand-assets/D98882.jpg");
}
</style>