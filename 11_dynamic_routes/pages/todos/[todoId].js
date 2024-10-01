import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {

    const router = useRouter()

    const todoId = router.query.todoId

    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>Comentário: Fugiat mollit nostrud aliqua minim nulla cupidatat. <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: Consequat labore enim excepteur dolore ad duis aute ut. <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>
            <p>Comentário: Voluptate adipisicing dolore nisi laboris veniam consectetur amet. <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
        </>
    );
}