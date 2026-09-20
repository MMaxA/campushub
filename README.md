# CampusHub frontend

Frontend-каркас приложения «Система поиска студенческих мероприятий» на React, Vite, TypeScript, React Router, Redux Toolkit, Axios и Tailwind CSS.

## Запуск

```bash
npm install
cp .env.example .env
npm run dev
```

Доступные проверки: `npm run lint`, `npm run typecheck`, `npm run build`.

Frontend отделён от будущего REST API: Axios использует `VITE_API_BASE_URL`, а текущие страницы работают с пустыми/mock-friendly состояниями без имитации серверной авторизации.

