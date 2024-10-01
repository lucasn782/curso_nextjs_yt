import Link from "next/link";

export async function getStaticProps(context) {
    const {params} = context

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
    )

    const todo = await data.json()

    return {
        props: { todo },
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Todo({ todo }) {
    return (
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Exibindo o todo: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            <p>Comentário: Fugiat mollit nostrud aliqua minim nulla cupidatat. <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: Consequat labore enim excepteur dolore ad duis aute ut. <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></p>
            <p>Comentário: Voluptate adipisicing dolore nisi laboris veniam consectetur amet. <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></p>
        </>
    );
}