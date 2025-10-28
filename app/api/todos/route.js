import { dbConnection } from '@/lib/dbConnection';
import { Todo } from '@/lib/models/todos';
import { NextResponse } from 'next/server';

dbConnection();

export async function GET() {
    try {
        const todos = await Todo.find();
        return NextResponse.json(todos, { status: 200 });
    } catch (error) {
        console.log('Error in GET: ', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const todo = await req.json();
        const newTodo = await Todo.create(todo);
        return NextResponse.json(
            { message: 'Todo Created Successfully', newTodo },
            { status: 201 }
        )
    } catch (error) {
        console.log('Error in POST', error);
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}