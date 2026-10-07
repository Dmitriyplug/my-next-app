# Лабораторная: структура проекта Next.js, Server и Client Components

## Запуск
```bash
npm install
npm run dev
```
Открыть http://localhost:3000

## Что реализовано
| Маршрут | Что демонстрирует |
|---|---|
| `/server-demo` | async Server Component; `console.log` виден в терминале |
| `/client-demo` | Client Component (`'use client'`, `useState`, `onClick`); `console.log` виден в консоли браузера |
| `/greet-demo` | Server Function (`'use server'` в `app/actions.ts`), вызов из клиента |
| `/about` | статическая страница |
| `/blog/[slug]` | динамический маршрут, `params` как Promise, `generateStaticParams` |
| `/products/[id]` | кейс: Server Component + клиентская кнопка |

## Структура
- `app/` — маршруты (App Router), `page.tsx` делает маршрут публичным
- `public/` — статические ресурсы
- `next.config.ts` — конфигурация Next.js
