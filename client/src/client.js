// Connect react app to database
import { createClient } from '@supabase/supabase-js'

const URL = 'https://gnxurjdtphmibbybophe.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdueHVyamR0cGhtaWJieWJvcGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYyNjgsImV4cCI6MTk5NjIzMjI2OH0.CAKEVOIG9x-fKjz30tmlmuYrXhTyMQe-TCU3hJBo2oQ'

export const supabase = createClient(URL, API_KEY);