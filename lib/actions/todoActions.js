// actions/todoActions.js
'use server';

import { Todo } from '@/lib/models/todos';
import { dbConnection } from '@/lib/dbConnection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//add
export async function saveNewTodo(formData) {
  await dbConnection();
  const title = formData.get('title');
  const author = formData.get('author');
  await Todo.create({ title, author });
  revalidatePath('/todo');
  redirect('/todo');
}

//update
export async function updateTodo(formData) {
  await dbConnection();
  const id = formData.get('id');
  const title = formData.get('title');
  const author = formData.get('author');
  await Todo.findByIdAndUpdate(id, { title, author });
  revalidatePath('/todo');
  redirect('/todo');
}

// delete
export async function deleteTodo(formData) {
  await dbConnection();
  const id = formData.get('id');
  await Todo.findByIdAndDelete(id);
  revalidatePath('/todo');
}