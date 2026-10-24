<script setup>
import AboutItem from "./AboutItem.vue";
</script>

<template>
  <AboutItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Who Are We?</template>
    Warrior Robotics is the premier technology-based student activity at Lincoln Sudbury Regional High School, made up of 30+ students who participate in the FIRST Robotics Competition (FRC). 
    This international engineering competition challenges students to work together as a team, with the help of teachers and mentors, over the course of 30 days to brainstorm, design, construct and test their robot, culminating in competitions where teams put their robots to the test. 
    The team is entirely student-led and dependent on community fundraising in order to meet our budget for robot parts, competition fees, and team travel.
    Warrior Robotics is the premier technology-based student activity at Lincoln Sudbury Regional High School, made up of 30 students who participate in the FIRST Robotics Competition (FRC). 
    This international engineering competition challenges students to work together as a team, with the help of teachers and mentors, over the course of 30 days to brainstorm, design, construct and test their robot, culminating in competitions where teams put their robots to the test. 
    The team is entirely student-led and dependent on community fundraising in order to meet our budget for robot parts, competition fees, and team travel.
    <router-link to="/enroll" class="text-blue-500 underline">our team</router-link>.
  </AboutItem>

  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Goals</template>

    At the heart of our organization lies a mission: to help students develop
    curiosity for computer science, and equip them with essential skills to
    navigate an era fundamentally defined by computer science. We are dedicated
    to fostering a generation of individuals who can confidently embrace the
    digital landscape, unlocking countless opportunities for personal and
    professional growth through competition and professional help.
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Program</template>
    At the heart of our organization lies a mission: to help students develop
    curiosity for computer science, and equip them with essential skills to
    navigate an era fundamentally defined by computer science. We are dedicated
    to fostering a generation of individuals who can confidently embrace the
    digital landscape, unlocking countless opportunities for personal and
    professional growth through competition and professional help.
    <a class="text-blue-500" href="/enroll" type="link"><u>here</u>.</a>
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Future</template>
    At the heart of our organization lies a mission: to help students develop
    curiosity for computer science, and equip them with essential skills to
    navigate an era fundamentally defined by computer science. We are dedicated
    to fostering a generation of individuals who can confidently embrace the
    digital landscape, unlocking countless opportunities for personal and
    professional growth through competition and professional help.
    In our pursuit of winning, We are in the process of becoming great. Watch us!
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Donations</template>

    Support us in making a difference
    <a
      class="text-blue-500"
      href="https://www.facebook.com/LSteam4169/"
      type="link"
      ><u>here</u></a
    >. Any amount you give is appreciated as your donation helps us in keeping
    our programs free and accessible for everyone to use. Every dollar you give
    goes directly to providing participants with tools and resources to help
    them succeed.
  </AboutItem>
</template>
