<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPSocialLink from 'vitepress/dist/client/theme-default/components/VPSocialLink.vue'

type Icon = string | { svg: string }

type Link = {
  icon: Icon
  link: string
  ariaLabel?: string
}

type LinkGroup = {
  name: string,
  items: Link[]
}

const { theme } = useData()
const groups = (theme.value as any).socialLinkGroups as Group[] || []
</script>

<template>
  <div class="SocialLinkGroups">
    <template v-for="(g, gi) in groups" :key="gi">
      <div class="SocialLinkGroup">
        <template v-for="(item, i) in g.items" :key="i">
          <VPSocialLink
            class="SocialLink"
            :link="(item as Link).link"
            :icon="(item as Link).icon"
            :aria-label="(item as Link).ariaLabel"
          />
        </template>
      </div>
      <span
        class="SocialLinkGroupSeparator"
        aria-hidden="true"
      />
    </template>
  </div>
</template>
