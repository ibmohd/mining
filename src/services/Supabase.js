import { createClient } from '@supabase/supabase-js'

const url = "https://ujwjkahqaviniqeulkkl.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqd2prYWhxYXZpbmlxZXVsa2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwMTAwMjksImV4cCI6MTk4OTU4NjAyOX0.SafPVa53fKNGizp6D02N4HCnmnqhm2cfMfsuoVIx7n0"

export const supabase = createClient(url,key);
