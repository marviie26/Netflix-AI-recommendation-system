import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eewqrznbzvqhbdhxxuqb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVld3Fyem5ienZxaGJkaHh4dXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNzA2OTQsImV4cCI6MjAxMzg0NjY5NH0.Yp-7w7ci4PbtCRwY6H6RjscJ-7pUbBWlp3koKwSpC1k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});