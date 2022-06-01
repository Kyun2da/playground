import { Stack, Title } from '@mantine/core';
import { TodoItem } from 'components/todo-item/TodoItem';
import { useTodo } from 'hooks/useTodo';

export function TodoList() {
  const { todo } = useTodo();

  return (
    <Stack>
      <Title>해야할 일</Title>
      {todo
        .filter((item) => item.completed === false)
        .map((item) => {
          return <TodoItem item={item} />;
        })}
      <Title>한 일</Title>
      {todo
        .filter((item) => item.completed === true)
        .map((item) => {
          return <TodoItem item={item} />;
        })}
    </Stack>
  );
}
