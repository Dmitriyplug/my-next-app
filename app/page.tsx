import Link from 'next/link';

export default function Home() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Лабораторная: Next.js</h1>
            <ul>
                <li><Link href="/server-demo">Server Component</Link></li>
                <li><Link href="/client-demo">Client Component</Link></li>
                <li><Link href="/greet-demo">Server Function ('use server')</Link></li>
                <li><Link href="/about">Статическая страница</Link></li>
                <li><Link href="/blog/nextjs-vvedenie">Динамический маршрут</Link></li>
                <li><Link href="/products/1">Кейс: карточка товара</Link></li>
            </ul>
        </main>
    );
}
