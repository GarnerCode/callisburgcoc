import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://sfnuxnmbyqqthuhvsjmo.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmbnV4bm1ieXFxdGh1aHZzam1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2MDA0ODIsImV4cCI6MjAwMDE3NjQ4Mn0.aywpOI1RkLwppzEYpFtIz72cuUTOxJMC5KfettP0eUM';
export const supabase = createClient(supabaseUrl, supabaseKey);