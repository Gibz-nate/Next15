import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function GET(){
    const res = await fetch('http://localhost:5000/todos')
    if(!res.ok) throw new Error('Failed to fetch data');
    const todos = await res.json()
    return NextResponse.json(todos)

}

export async function POST(request: any){

    const body = await request.json();
    const res = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        
    })
    const todo = await res.json()
    return NextResponse.json(todo);
}