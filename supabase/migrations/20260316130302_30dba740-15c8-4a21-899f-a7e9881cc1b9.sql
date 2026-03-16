
CREATE TABLE public.petition_signatures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.petition_signatures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert signatures"
  ON public.petition_signatures
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read signature count"
  ON public.petition_signatures
  FOR SELECT
  TO anon, authenticated
  USING (true);
