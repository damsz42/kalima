-- Base de données Supabase de Kalima, à exécuter une fois dans le SQL Editor du projet.

-- Une ligne par compte : la progression complète, au même format que dans localStorage.
create table public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Chaque compte ne peut lire et écrire que sa propre progression.
alter table public.progress enable row level security;

create policy "Lire sa progression" on public.progress
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "Créer sa progression" on public.progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

create policy "Modifier sa progression" on public.progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.progress to authenticated;

-- Bouton « Supprimer mon compte » : efface le compte connecté, et sa progression par cascade.
create function public.delete_user()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from auth.users where id = (select auth.uid());
$$;

revoke execute on function public.delete_user() from public, anon;
grant execute on function public.delete_user() to authenticated;
