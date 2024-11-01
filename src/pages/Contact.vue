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

  <div class="with-bg w-full h-full bg-cover flex flex-col xs:px-0 xl:px-[112px] gap-[64px] bg-center  ">
    <div class="mx:px-[64px]    py-64px md:px-64px xs:px-16px md:h-full lg:h-fit xs:h-[calc(100vh-64px)] nuke-transition-productive-standard-slow-01
       bg-dark-80 bg-opacity-60 invert dark:invert-0 text-light-10 flex lg:flex-row xs:flex-col w-full gap-64px justify-start">
      <div class="nuke-text-fluid-display-01  w-full h-full">
        Contact
      </div>
      <div class="nuke-text-fluid-paragraph-01 w-full  ">
        Connect with Independent Society of Knowledge, without the community, we are nothing special.
      </div>
    </div>
    <div>

<div class="flex flex-col gap-32px mb-64px">
  <div class="grid md:grid-cols-2 xs:grid-cols-1 gap-32px bg-light-10 dark:bg-dark-80 mx:px-[64px]    py-64px md:px-64px xs:px-16px">
        <TextSubsection title="General contact methods" mode="vertical">
          To contact Independent Society of Knowledge for general informations about the society, meetings, teams, and other aspects please contact us through the following email addresses.
        </TextSubsection> 
        <div class="flex flex-col gap-16px">
          <Link text="hello@iskportal.com" link="mailto:hello@iskportal.com" helper="Send an empty email to get to know ISK at first glance."/>
          <Link text="info@iskportal.com" link="mailto:info@iskportal.com" helper="Informations regarding the general position of ISK."/>
          <Link text="help@iskportal.com" link="mailto:help@iskportal.com" helper="ISK general help email."/>
          <Link text="press@iskportal.com" link="mailto:press@iskportal.com" helper="Subscribe to our press to get the latest news in your inbox by sending and empty email."/>
        </div>
        </div>
       <div class="grid xs:grid-cols-1 lg:grid-cols-2 gap-32px">
        <div class="grid md:grid-cols-2 xs:grid-cols-1 gap-32px bg-light-10 dark:bg-dark-80 mx:px-[64px]    py-64px md:px-64px xs:px-16px">
        <TextSubsection title="Get involved individually" mode="vertical">
         Contact us to get involved as an individual.
        </TextSubsection> 
        <div class="flex flex-col gap-16px">
          <Link text="individual@iskportal.com" link="mailto:individual@iskportal.com" helper="Tell ISK who you are and we would consider you joining officially."/>
          <Link text="proposals@iskportal.com" link="mailto:proposals@iskportal.com" helper="Propose to us a new idea, research, or project."/>
        </div>
        </div>
                <div class="grid md:grid-cols-2 xs:grid-cols-1 gap-32px bg-light-10 dark:bg-dark-80 mx:px-[64px]    py-64px md:px-64px xs:px-16px">
        <TextSubsection title="Research groups, and Teams" mode="vertical">
          Connect to Independent Society of Knowledge as a team, or research group.
        </TextSubsection> 
        <div class="flex flex-col gap-16px">
          <Link text="groups@iskportal.com" link="mailto:groups@iskportal.com" helper="Get involved by sending an email explaining your team/research group. Or find about sub-groups needing people."/>
          <Link text="research@iskportal.com" link="mailto:research@iskportal.com" helper="Get your research under the ISK umbrella."/>
         </div>
        </div>
       </div>
        <div class="grid md:grid-cols-2 xs:grid-cols-1 gap-32px bg-light-10 dark:bg-dark-80 mx:px-[64px]    py-64px md:px-64px xs:px-16px">
        <TextSubsection title="Institutes and Organizations" mode="vertical">
         Become a sponsor, or partner of the decentralized academia.
        </TextSubsection> 
        <div class="flex flex-col gap-16px">
          <Link text="orgs@iskportal.com" link="mailto:orgs@iskportal.com" helper="For organizations."/>
          <Link text="institutes@iskportal.com" link="mailto:institutes@iskportal.com" helper="For Institutes."/>
          <Link text="partnership@iskportal.com" link="mailto:partnership@iskportal.com" helper="Become a partner."/>
          <Link text="sponsorship@iskportal.com" link="mailto:sponsorship@iskportal.com" helper="Help us financially."/>
        </div>
        </div>
</div>

      
    </div>
  </div>
</template>
<script setup lang="ts">
import GlassReferal from '@/components/GlassReferal.vue';
import TextSubsection from '@/components/TextSubsection.vue';
import Link from '@/components/Link.vue';

</script>
<style scoped>
.with-bg {
  background-image: url("public/ivan-jevtic-AL3Cbxp8css-unsplash.jpg");
}
</style>