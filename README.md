# AstroVeb

Astro сайт с редактированием контента через Keystatic (замена PagesCMS).

## Основные команды

- `npm install` — установить зависимости
- `npm run dev` — локальная разработка (`http://127.0.0.1:4321`)
- `npm run build` — прод-сборка
- `npm run preview` — локальный просмотр сборки

## CMS (Keystatic)

- Админка доступна по маршруту `http://127.0.0.1:4321/keystatic`
- В локальном режиме (`local`) контент пишется напрямую в файлы проекта
- В GitHub-режиме (`github`) контент редактируется прямо в репозитории и подходит для Vercel

### Где лежит схема

- `keystatic.config.ts` — полная схема контента
- `src/data/*.json` — глобальные данные
- `src/data/pages/*.json` — страницы
- `src/content/blog/*.md` — посты блога

## Настройка GitHub режима для Vercel

1. Скопируйте `.env.example` в `.env` локально.
2. Укажите `KEYSTATIC_GITHUB_REPO=owner/repo`.
3. Откройте `/keystatic`, создайте/подключите GitHub App по инструкции Keystatic.
4. Добавьте переменные в Vercel Project Settings -> Environment Variables:
	- `KEYSTATIC_GITHUB_REPO`
	- `KEYSTATIC_GITHUB_CLIENT_ID`
	- `KEYSTATIC_GITHUB_CLIENT_SECRET`
	- `KEYSTATIC_SECRET`
	- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
5. Убедитесь, что деплой идет как Astro server output (уже включено в `astro.config.mjs`).

## Примечание по старой конфигурации

Файл `.pages.yml` оставлен в репозитории как справочный, но больше не используется приложением.
