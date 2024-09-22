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
  <div class="mx:px-[112px] py-[32px]

  flex flex-row gap-[32px] w-full ">
    <!-- Submenu Buttons -->
    <div class="flex flex-col border-r-light-60 dark:border-r-dark-50 min-w-[256px] border-r-[1px]">
      <nav-sub-menu-section-button
          v-for="item in solutionsSubmenuItems"
          :key="item.title"
          v-model="selectionModel"
          :value="item.title"
      >
        {{ item.title }}
      </nav-sub-menu-section-button>
    </div>
    <div>
      <!-- Submenu Content Sections -->
      <div v-for="item in solutionsSubmenuItems" :key="item.title"
           class="
      nuke-transition-productive-standard-moderate-01
      transition-opacity

      data-[selected=false]:hidden
      data-[selected=false]:opacity-0
      data-[selected=true]:visible
      data-[selected=true]:opacity-100"
           :data-selected="item.title == selectionModel"
      >
        <nav-sub-menu-content-section
            class=" "
            :title="item.title"
            :description="item.description"
        >
          <nav-sub-menu-content-card
              v-for="card in item.cards"
              :title="card.title"
              :description="card.description"
              :key="card.title"
          />
        </nav-sub-menu-content-section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"; // Import ref to create a reactive state
import {solutionsSubmenuItems} from "./solutionsSubmenuItems.ts";
import NavSubMenuSectionButton from "@/components/nav/submenus/NavSubMenuSectionButton.vue";
import NavSubMenuContentSection from "@/components/nav/content/NavSubMenuContentSection.vue";
import NavSubMenuContentCard from "@/components/nav/content/NavSubMenuContentCard.vue";

// Selection model to track the selected submenu item
const selectionModel = ref("Initiatives");
</script>
