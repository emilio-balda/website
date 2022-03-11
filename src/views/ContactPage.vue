<script setup lang="ts">
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'

import AppCard from '@/components/AppCard.vue'
import TableResponsive from '@/components/TableResponsive.vue'
</script>

<template>
  <app-card class="w-fit mx-auto">
    <table-responsive>
      <tr class="py-10 hover:text-emerald-400">
        <td class="px-4"><email-icon class="" /></td>
        <td>
          <p class="text-xl text-left whitespace-nowrap">
            <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
          </p>
        </td>
      </tr>
      <tr class="py-10 hover:text-emerald-400">
        <td class="px-4"><linkedin-icon /></td>
        <td>
          <p class="text-xl text-left whitespace-nowrap">
            <a href="https://www.linkedin.com/in/emiliobalda/">emiliobalda</a>
          </p>
        </td>
      </tr>
    </table-responsive>
  </app-card>
</template>
