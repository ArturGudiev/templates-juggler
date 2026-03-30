import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Remove database connections',
        content: `
    SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'chpo'
  AND pid <> pg_backend_pid();

`
    }
] as Template[];
