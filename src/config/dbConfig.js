import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL
const supabaseApiKey = process.env.SUPABASE_API_KEY

if (!supabaseUrl) throw new Error("Missing or incorrect Supabase Url.");
if (!supabaseApiKey) throw new Error("Missing or incorrect Supabase API Key.");
export const supabase = createClient(supabaseUrl, supabaseApiKey);