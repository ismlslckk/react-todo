export interface Todo {
  id: string
  title: string
  completed : boolean
}

export interface TodoState {
  todos:Todo[],
  selectedTodoType:TodoType
}

export enum TodoType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
