import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://sfnuxnmbyqqthuhvsjmo.supabase.co';
export const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);