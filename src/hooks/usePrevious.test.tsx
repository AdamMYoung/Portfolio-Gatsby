import { renderHook } from '@testing-library/react-hooks';

import usePrevious from './usePrevious';

describe('previous value hook', () => {
  test('returns the correct value', () => {
    var testValue = 22;
    const { rerender, result } = renderHook(() => usePrevious(testValue));

    testValue = 45;
    rerender();

    expect(testValue).toBe(45);
    expect(result.current).toBe(22);
  });
});
