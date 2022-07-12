import { renderHook } from '@testing-library/react'

import { useComputed } from 'opndx'

describe('hooks', () => {
  test('useComputed', () => {
    const { result, rerender } = renderHook(() =>
      useComputed({ name: 'Alice' }, []),
    )
    const user = result.current
    expect(user).toEqual({ name: 'Alice' })
    rerender()
    expect(result.current).toBe(user)
  })
})
