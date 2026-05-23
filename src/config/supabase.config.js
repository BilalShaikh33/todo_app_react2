import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwfrjckylwfhraqdzcbm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3ZnJqY2t5bHdmaHJhcWR6Y2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyODE5NDIsImV4cCI6MjA5Mzg1Nzk0Mn0.cxWeEyo6Ci-d836U2E7MV-TVoaDXCslIx196W8Ec6KM";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);