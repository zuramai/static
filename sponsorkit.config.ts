import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {
    login: 'zuramai',
    type: 'user',
  },
  // Rendering configs
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.medium,
    },
    {
      title: 'Backers',
      preset: presets.medium,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: presets.large,
    },
  ],
})