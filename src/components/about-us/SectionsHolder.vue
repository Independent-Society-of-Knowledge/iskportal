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
  <div class="flex lg:flex-row xs:flex-col">
    <div
        class="flex xs:flex-wrap lg:sticky  lg:flex-col w-fit text-nowrap lg:pr-[128px] xs:pr-16px h-fit border-l-light-40 dark:border-l-dark-50 border-l-[1px]   lg:top-64px ">
      <a href="#philosophy">
        <nav-sub-menu-section-button :model-value="selected" value="philosophy">Philosophy
        </nav-sub-menu-section-button>
      </a>
      <a href="#initiate">
        <nav-sub-menu-section-button :model-value="selected" value="initiate">Initiate the Change
        </nav-sub-menu-section-button>
      </a>
      <a href="#establishment">
        <nav-sub-menu-section-button :model-value="selected" value="establishment">Establishment
        </nav-sub-menu-section-button>
      </a>
      <a href="#impact">
        <nav-sub-menu-section-button :model-value="selected" value="impact">Impact
        </nav-sub-menu-section-button>
      </a>
    </div>
    <div class="flex flex-col w-full gap-64px">
      <div class="flex flex-col gap-32px">

        <div class="nuke-text-legal-01 flex justify-end items-end flex-col gap-8px  ">
          <img src="/diane-serik--2Xvz8uRnfM-unsplash.jpg"/>
          Diane Serik via unsplash</div>
        <div id="philosophy" class="nuke-text-fluid-display-01">
          Philosophy
        </div>
        <div class="nuke-text-heading-03 italic">
          Knowledge should be free and accessible to everyone. We established ISK to break away from the limitations of
          traditional academia, which often restricts access to education and research. Our decentralized model empowers
          individuals worldwide to learn, share, and innovate without barriers.
        </div>
        <div class="nuke-text-fluid-paragraph-01">
          At the Independent Society of Knowledge (ISK), we believe in revolutionizing the way humanity approaches
          knowledge and education. Our philosophy is simple yet transformative: knowledge should be free, accessible,
          and
          shared among all people, regardless of their background or geographic location. We founded ISK to dismantle
          the
          barriers imposed by traditional academic institutions and to create a new, decentralized model for the pursuit
          of knowledge.
        </div>
      </div>
      <div class="flex flex-col gap-32px">
        <div id="initiate" class="nuke-text-fluid-display-01">
          Initiate the Change
        </div>
        <div class="nuke-text-heading-03 italic">
          We invite you to be part of this transformation. By supporting ISK, you are not just advocating for open
          access to education and research; you are joining a global community committed to pushing the boundaries of
          human potential. Let’s initiate the change together—break down the walls of exclusivity, foster a culture of
          collaboration, and build a future where knowledge truly belongs to everyone. Join us in our mission to
          revolutionize the way we learn and share knowledge for the benefit of all humanity.
        </div>
        <div class="nuke-text-fluid-paragraph-01 flex flex-col gap-16px">
          <div>
            Imagine a world where knowledge is not confined by walls or limited to a privileged few but is a shared
            resource that everyone can access freely. At the Independent Society of Knowledge (ISK), we believe this
            vision is not only possible but essential for the future of humanity. We are challenging the traditional
            academic systems that have long restricted access to education and research. We are initiating a movement to
            create a decentralized, open, and inclusive environment where everyone can learn, contribute, and innovate
            without boundaries.
          </div>
        </div>
      </div>
      <div class="flex xs:flex-col lg:flex-row gap-16px">
        <div mode="vertical" id="establishment"
             class="bg-light-40 text-dark-100 p-32px nuke-text-fluid-paragraph-01 w-full flex flex-col gap-16px">
          <div class="nuke-text-heading-03 p-16px w-fit bg-dark-100  text-light-10">Establishment</div>
          ISK was established in August 2023, born out of our desire to see academia take a more open and
          collaborative route. We realized that, while traditional academic structures have their merits, there is a
          need for a more decentralized and flexible model that can adapt to the rapid changes of our modern world. We
          believe that knowledge should be shared freely and that everyone should have the opportunity to contribute
          to and benefit from it, regardless of their background or location.
        </div>
        <div mode="vertical" class="bg-dark-70 p-32px nuke-text-fluid-paragraph-01 flex flex-col w-full gap-16px text-light-10" id="impact">
          <div class="nuke-text-heading-03  p-16px w-fit bg-light-10  text-dark-100">Impact</div>
          We envision a future where knowledge is truly decentralized, where every individual, regardless of their
          circumstances, has the power to learn, teach, and innovate. This future holds the promise of unprecedented
          advancements in science, technology, arts, and culture, all driven by a collective commitment to share and
          build upon each other's ideas. At ISK, we believe that this future is not only possible but essential for
          the
          continued progress and well-being of humanity.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import NavSubMenuSectionButton from "@/components/nav/submenus/NavSubMenuSectionButton.vue";

const selectedSection = ref("philosophy")

function changeSelected(to: string) {
  selectedSection.value = to
}

var selected = 'none'
</script>
<style scoped>

</style>