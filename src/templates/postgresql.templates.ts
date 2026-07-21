import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Remove database connections',
        syntaxHighlightLanguage: 'sql',
        templateFunction: async () => {
            const dbName = (await getUserInput("Enter database name:")).trim();
            if (!dbName) {
                return "";
            }
            return `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '${dbName}' AND pid <> pg_backend_pid();`;
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
        title: 'Insert into table',
        content: `
            INSERT INTO users (first_name, last_name, email) 
            VALUES ('John', 'Doe', 'john.doe@example.com'); 
        `
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
    },
    {
        title: 'Collate',
        content: `SELECT datcollate, datctype FROM pg_database WHERE datname = current_database();`
    },
    {
        title: 'Create database with collate',
        content: `CREATE DATABASE chpo WITH ENCODING 'UTF8' LC_COLLATE 'Russian_Russia.1251' LC_CTYPE 'Russian_Russia.1251' TEMPLATE template0;`
    },
    {
        title: 'Function call',
        templateFunction: async () => {
            const funcCall = (await getUserInput("Enter function call (e.g. f(2, 42)):")).trim();
            if (!funcCall) {
                return "";
            }
            return `SELECT (${funcCall}).*;`;
        },
    }, 
    {
        title: 'PSQL: execute query from terminal ',
        content: 'psql -U postgres -d chpo -c "SELECT * FROM users;"'
    },
    {
        title: 'Run script for specific db',
        content: 'psql -d имя_базы_данных -f путь/к/файлу.sql'
    },
    {
        title: 'Filter timestamp with timezone by date', 
        // content: `
        // SELECT * FROM tasks WHERE done_date_time::date = '2026-07-13';
        // `,
        templateFunction: async () => {
            const date = (await getUserInput("Enter date (e.g. 2026-07-13):")).trim();
            if (!date) {
                return "";
            }
            return `SELECT * FROM tasks WHERE done_date_time::date = '${date}';`;
        },
    }
] as Template[];
