cd
mv
rm: borrar archivos
ls: listar archivos y carpetas
pwd: ubicación actual

# nueva rama caracx:
git push --set-upstream origin caracx || ¿git push origin main
git branch -d caracx
git checkout caracx
git branch -D caracx
git push --delete caracx
git push --delete origin caracx

# historial visual:
git log --graph --pretty=oneline --abbrev-commit

#Docker
# luego de instalarlo, si no corren los siguientes usar root o sudo siempre
# y si sale "docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?", correr (bajo root) el demonio docker:
	systemctl start docker
docker container ls
docker version
docker info

# crear contenedor
entrar como root o sudo siempre
docker container run --name micontenedor0 --publish 8080:80 nginx:latest
#docker container run --name my-www-container --publish 8081:80 my-nginx-html
# en un navegador:
http://localhost:8080 (aparece nginx <- está corriendo en la máquina)