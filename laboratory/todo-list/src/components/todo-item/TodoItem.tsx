import { Button, Checkbox, Group, Input } from '@mantine/core';
import { useTodo } from 'hooks/useTodo';
import { Todo } from 'models/todo';

interface Props {
  item: Todo;
}

export function TodoItem({ item }: Props) {
  const { id, title, completed } = item;
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <Group key={id}>
      <Checkbox
        checked={completed}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      <Input value={title} />
      <Button
        color='red'
        onClick={() => {
          removeTodo(id);
        }}
      >
        삭제하기
      </Button>
    </Group>
  );
}
