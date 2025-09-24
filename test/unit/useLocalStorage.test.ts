import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useLocalStorage } from '~/composables/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return default value when localStorage is empty', () => {
    const { value } = useLocalStorage('test-key', 'default')
    expect(value.value).toBe('default')
  })

  it('should read value from localStorage', () => {
    const mockValue = 'test-value'
    vi.mocked(localStorage.getItem).mockReturnValue(mockValue)

    const { value } = useLocalStorage('test-key', 'default')
    expect(value.value).toBe(mockValue)
  })

  it('should write value to localStorage', () => {
    const { setValue } = useLocalStorage('test-key', 'default')
    setValue('new-value')

    expect(localStorage.setItem).toHaveBeenCalledWith('test-key', '"new-value"')
  })

  it('should remove value from localStorage', () => {
    const { remove } = useLocalStorage('test-key', 'default')
    remove()

    expect(localStorage.removeItem).toHaveBeenCalledWith('test-key')
  })

  it('should handle localStorage errors gracefully', () => {
    vi.mocked(localStorage.getItem).mockImplementation(() => {
      throw new Error('localStorage error')
    })

    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { value } = useLocalStorage('test-key', 'default')
    expect(value.value).toBe('default')
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error reading localStorage key "test-key":',
      expect.any(Error),
    )

    consoleSpy.mockRestore()
  })

  it('should work with complex objects', () => {
    const defaultObject = { name: 'test', count: 0 }
    const { value, setValue } = useLocalStorage('object-key', defaultObject)

    expect(value.value).toEqual(defaultObject)

    const newObject = { name: 'updated', count: 5 }
    setValue(newObject)

    expect(localStorage.setItem).toHaveBeenCalledWith('object-key', JSON.stringify(newObject))
  })
})
