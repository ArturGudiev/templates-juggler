import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
   {
    title: 'go inside container',
    templateFunction: async () => {
      let containerName = await getUserInput("Container name");
      if (!containerName) {
         containerName = "container_name";
      }
      return `docker exec -it ${containerName} bash`;
    },
   },
   {
      title: 'execute bash command inside container',
      content: 'docker exec -it container_name bash -c "command"',
     },
   {
      title: 'import db dump inside docker container',
      content: 'docker exec -i container_name psql -U postgres -d database_name < backup.sql',
   },
   {
      title: 'import db (to local host db) from docker container on remote host',
      content: `
      ssh user@remote_host "docker exec -i remote_container_name pg_dump -U postgres -d chpo" | psql -U postgres -d local_db_name
      `,
   },
   {
      title: 'import db (to remote host docker container db) from local host db',
      content: `
# 1. Dump local DB and copy to remote
pg_dump -U postgres -d local_db_name > backup.sql && scp backup.sql user@remote_host:/tmp/backup.sql

# 2. Apply dump inside remote docker container
ssh user@remote_host "cat /tmp/backup.sql | docker exec -i remote_container_name psql -U postgres -d remote_db_name"
      `,
   },
   {
      title: 'build docker container (compose) ',
      content: 'docker compose up -d --build',
   },
   {
      title: 'restart the project ',
      content: `
# 1. Bring down the existing container
docker compose down

# 2. Recreate and start the container with the new .env values
docker compose up -d
      `,
   },
   {
      title: 'free (clean) disk space',
      content: `
docker system prune -a --volumes # remove unused images, containers
docker builder prune -a    # clear cache 
      `,
   },
   {
      title: 'Docker compose: stop project',
      content: 'docker compose down',
   }
] as Template[];
