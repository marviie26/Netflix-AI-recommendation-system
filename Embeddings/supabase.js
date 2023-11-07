import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eewqrznbzvqhbdhxxuqb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVld3Fyem5ienZxaGJkaHh4dXFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODI3MDY5NCwiZXhwIjoyMDEzODQ2Njk0fQ.-9dGLyNnZZYXOKTVj52klFPpVec4ps1DDK7oqcSHxUw';

export const supabase = createClient(supabaseUrl, supabaseKey);