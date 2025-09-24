import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      // Unit tests
      {
        test: {
          name: 'unit',
          include: ['test/unit/**/*.{test,spec}.{js,ts,vue}'],
          environment: 'jsdom',
          globals: true,
          setupFiles: ['test/unit/setup.ts'],
        },
      },
      // Integration tests
      {
        test: {
          name: 'integration',
          include: ['test/integration/**/*.{test,spec}.{js,ts,vue}'],
          environment: 'jsdom',
          globals: true,
          setupFiles: ['test/integration/setup.ts'],
        },
      },
      // Nuxt tests
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/**/*.{test,spec}.{js,ts,vue}'],
          environment: 'nuxt',
        },
      }),
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.nuxt/',
        '.output/',
        'coverage/',
        'test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    ui: {
      enabled: true,
    },
    globals: true,
    environment: 'jsdom',
  },
})
