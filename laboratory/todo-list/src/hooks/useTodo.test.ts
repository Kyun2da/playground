import { act, renderHook } from '@testing-library/react-hooks';
import { useTodo } from './useTodo';

describe('hooks/useTodo.ts', () => {
  test('투두 리스트를 추가한다.', () => {
    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.addTodo('안녕하세요1');
    });
    expect(result.current.todo.length).toBe(1);
  });

  test('투두를 토글한다.', () => {
    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.toggleTodo(result.current.todo[0].id);
    });
    expect(result.current.todo[0].completed).toBe(true);
  });

  test('투두 리스트를 제거한다.', () => {
    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.removeTodo(result.current.todo[0].id);
    });
    expect(result.current.todo.length).toBe(0);
  });
});
