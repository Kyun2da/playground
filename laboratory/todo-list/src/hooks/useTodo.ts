import { atom, useAtom } from 'jotai';
import { Todo } from 'models/todo';

const todoAtom = atom<Todo[]>([]);

export function useTodo() {
  const [todo, updateTodo] = useAtom(todoAtom);

  const addTodo = (title: string) => {
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    updateTodo((x) => [...x, todo]);
  };

  const toggleTodo = (id: number) => {
    updateTodo((x) =>
      x.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    updateTodo((x) => x.filter((todo) => todo.id !== id));
  };

  return {
    todo,
    addTodo,
    updateTodo,
    toggleTodo,
    removeTodo,
  };
}
