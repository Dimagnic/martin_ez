# Martín EZ – Sitio web (React + Vite + TypeScript + Supabase)

Landing de contrataciones para Martín EZ. Diseñada por Cero+.

## Stack
React 18 · Vite 5 · TypeScript · Supabase (eventos + leads) · función Node en Vercel (`api/lead.ts`) · widget ClienteAI.

## Puesta en marcha
```bash
npm install
cp .env.example .env.local      # completa las variables
npm run dev
```
Sin variables de Supabase el sitio funciona igual (eventos de respaldo; el formulario solo abre WhatsApp).

## Supabase
1. Crea un proyecto y ejecuta `supabase/schema.sql` en el SQL Editor.
2. Copia URL y claves a `.env.local` (ver `.env.example`). La `service_role` solo va en variables de servidor, nunca con prefijo `VITE_`.
3. Para publicar un evento: tabla `events` → agrega `venue` y `event_date`.
4. Los contactos del formulario llegan a la tabla `leads`.

## GitHub y Vercel
```bash
git init && git add . && git commit -m "Sitio Martín EZ"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/martin-ez-web.git
git push -u origin main
```
En Vercel: **Add New → Project → importa el repo** (detecta Vite). Agrega las 4 variables de `.env.example` en *Settings → Environment Variables* y despliega.

## Pendientes antes de entregar
- Cambiar `data-token` del widget en `index.html` y el QR (`public/img/qr-asistente.png`) por los de Martín.
- Reemplazar las fotos de ambiente de la galería (`public/img/gal-3.jpg`, `kind-2..4.jpg`) por fotos reales.
- Confirmar con Martín los textos de Servicios y Legal (`src/components/Footer.tsx`).
