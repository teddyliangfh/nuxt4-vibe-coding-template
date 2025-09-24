import { beforeEach, vi } from 'vitest'

// Mock environment variables
process.env.NODE_ENV = 'test'
process.env.NUXT_PUBLIC_API_BASE = '/api'

// Mock Nuxt composables
vi.mock('#app', () => ({
  useRuntimeConfig: vi.fn(() => ({
    public: {
      apiBase: '/api',
      appName: 'Test App',
      appVersion: '1.0.0',
    },
  })),
  useHead: vi.fn(),
  useSeoMeta: vi.fn(),
  navigateTo: vi.fn(),
  useRoute: vi.fn(() => ({
    path: '/',
    query: {},
    params: {},
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  })),
}))

// Reset all mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})
