import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'DB insert user to table',
        content: `
    insert into users (name,department_id,post,phone_number,role,is_active,created,deleted,password_hash) values ('Employee $$', 3, 'Работник','79119618896', 'EMPLOYEE', true,'2026-03-20 06:08:37.001349-07',false,'$2b$12$u7BtcnDUg2nZFpIn8G6FX.SfeWWCs/x.G7BQKEi6qPoFjwi3
fGQHG');
`
    },
] as Template[];
