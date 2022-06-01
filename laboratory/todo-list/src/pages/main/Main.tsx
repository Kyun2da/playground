import { Center, Stack } from '@mantine/core';
import { TodoInput } from 'components/todo-input/TodoInput';
import { TodoList } from 'components/todo-list/TodoList';

export function Main() {
  return (
    <Center>
      <Stack>
        <Stack>
          <h1>Todo List</h1>
          <TodoInput />
        </Stack>
        <Stack>
          <TodoList />
        </Stack>
      </Stack>
    </Center>
  );
}
