import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Remove database connections',
        content: `
    SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'chpo'
  AND pid <> pg_backend_pid();
`
    },
    {
        title: 'List of databases',
        content: ` \\l `
    },
    {
        title: 'Rename database',
        content: ` ALTER DATABASE old_dbname RENAME TO new_dbname; `
    },
    {
        title: 'Import data using pg_restore',
        content: `pg_restore -U имя_пользователя -d имя_бд имя_файла.dump`
    },
    {
        title: 'Export data',
        content: `pg_dump -U postgres -d chpo > backup.sql`
    }
] as Template[];
