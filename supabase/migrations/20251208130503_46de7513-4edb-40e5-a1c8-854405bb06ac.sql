-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow the edge function (using service role) to insert submissions
CREATE POLICY "Service role can insert submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Allow reading all submissions (you can restrict this later if needed)
CREATE POLICY "Anyone can read submissions"
ON public.contact_submissions
FOR SELECT
USING (true);