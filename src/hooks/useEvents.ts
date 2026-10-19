import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { EventItem } from '../types';

const FALLBACK: EventItem[] = [
  { id: 'f1', venue: 'Restaurante Santa Cecilia', city: 'Puebla, Pue.', event_date: null },
  { id: 'f2', venue: 'Ceviche 107', city: 'Puebla, Pue.', event_date: null },
];

export function useEvents(): EventItem[] {
  const [events, setEvents] = useState<EventItem[]>(FALLBACK);

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    supabase
      .from('events')
      .select('id,venue,city,event_date')
      .eq('published', true)
      .or(`event_date.is.null,event_date.gte.${new Date().toISOString()}`)
      .order('event_date', { ascending: true, nullsFirst: false })
      .limit(2)
      .then(({ data, error }) => {
        if (alive && !error && data && data.length > 0) setEvents(data as EventItem[]);
      });
    return () => {
      alive = false;
    };
  }, []);

  return events;
}
