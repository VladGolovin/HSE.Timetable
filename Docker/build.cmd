docker build --no-cache -f Dockerfile-application -t flexberry/apps/timetable:latest --rm ../
docker build --no-cache -f Dockerfile-postgres -t flexberry/postgres/timetable:latest --rm ../
docker image prune -f
