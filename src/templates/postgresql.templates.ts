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
    }
] as Template[];
