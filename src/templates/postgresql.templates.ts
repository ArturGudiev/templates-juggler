import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Remove database connections',
        language: 'sql',
        templateFunction: async () => {
            const databaseName = await getUserInput('Enter database name');
            return `
    SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '${databaseName}' AND pid <> pg_backend_pid();
`;
        }
    },
    {
        title: 'List of databases',
        content: ` \\l `
    },
    {
        title: 'Table structure',
        content: ` \\d table_name `
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
        title: 'Import data',
        content: `psql -U postgres -d chpo_9 -f .\backup.sql`
    },
    {
        title: 'Export data',
        content: `pg_dump -U postgres -d chpo > backup.sql`
    }
] as Template[];
