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

Теперь режим storage определяется автоматически:
- если `KEYSTATIC_GITHUB_REPO` пустой -> `local`
- если `KEYSTATIC_GITHUB_REPO` заполнен -> `github`

Пошагово:

1. Скопируйте `.env.example` в `.env` локально.
2. Укажите `KEYSTATIC_GITHUB_REPO=owner/repo` (пример: `projects-with-kents/astro-blog`).
3. Запустите `npm run dev` и откройте `/keystatic`.
4. На экране Keystatic создайте или подключите GitHub App.
5. В GitHub App возьмите значения:
	- `Client ID` -> `KEYSTATIC_GITHUB_CLIENT_ID`
	- `Client secret` -> `KEYSTATIC_GITHUB_CLIENT_SECRET`
	- `App slug` -> `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
6. Сгенерируйте `KEYSTATIC_SECRET` (случайная длинная строка 32+ символов).
7. Добавьте переменные в Vercel Project Settings -> Environment Variables:
	- `KEYSTATIC_GITHUB_REPO`
	- `KEYSTATIC_GITHUB_CLIENT_ID`
	- `KEYSTATIC_GITHUB_CLIENT_SECRET`
	- `KEYSTATIC_SECRET`
	- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
8. Перезапустите деплой в Vercel.
9. Проверьте `/keystatic` на прод-домене: редактор должен открываться и сохранять изменения в GitHub.

Опционально:
- `KEYSTATIC_GITHUB_BRANCH_PREFIX` можно задать для ограничения рабочих веток.

## Примечание по старой конфигурации

Файл `.pages.yml` оставлен в репозитории как справочный, но больше не используется приложением.
