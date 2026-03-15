-- Create stats table for dynamic percentages
CREATE TABLE public.stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  label_en TEXT NOT NULL,
  label_fr TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.stats ENABLE ROW LEVEL SECURITY;

-- Stats are publicly readable
CREATE POLICY "Stats are viewable by everyone"
  ON public.stats FOR SELECT
  USING (true);

-- Seed with initial data
INSERT INTO public.stats (key, value, label_en, label_fr, sort_order) VALUES
  ('lockdown_bypass', '94%', 'of browser lockdowns bypassed in under 2 minutes', 'des verrouillages navigateur contournés en moins de 2 minutes', 1),
  ('student_awareness', '73%', 'of students report knowing at least one bypass method', 'des étudiants connaissent au moins une méthode de contournement', 2),
  ('dom_extract', '< 5s', 'to extract answers via DOM inspection on major platforms', 'pour extraire les réponses via l''inspection DOM sur les principales plateformes', 3),
  ('client_controls', '0', 'client-side controls that survive a determined user', 'contrôles côté client qui résistent à un utilisateur déterminé', 4);