import { Template } from "../types/template.interface.js";

export default [
   {
    title: 'go inside container',
    content: 'docker exec -it container_name bash',
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
      title: 'free disk space',
      content: `
docker system prune -a --volumes # remove unused images, containers
docker builder prune -a    # clear cache 
      `,
   }
] as Template[];
