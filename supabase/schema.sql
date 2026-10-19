-- Ejecutar en Supabase > SQL Editor

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  venue text not null,
  city text default 'Puebla, Pue.',
  event_date timestamptz,            -- null = "Fecha por confirmar"
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  event_info text,
  message text,
  source text default 'web',
  created_at timestamptz not null default now()
);

alter table public.events enable row level security;
alter table public.leads  enable row level security;

-- Cualquiera puede LEER los eventos publicados (clave anon)
drop policy if exists "events_public_read" on public.events;
create policy "events_public_read" on public.events for select to anon, authenticated using (published);

-- leads: sin políticas = solo la service role (función /api/lead) puede escribir y leer

insert into public.events (venue, event_date) values
  ('Restaurante Santa Cecilia', null),
  ('Ceviche 107', null);
