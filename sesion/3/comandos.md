instalaciíón de slack (no es tema de clase):

https://snapcraft.io/install/slack/manjaro

#### nueva rama caracx:
```
git push --set-upstream origin caracx || ¿git push origin main
git branch -d caracx
git checkout caracx
git branch -D caracx
git push --delete caracx
git push --delete origin caracx
```

#### historial visual:
	git log --graph --pretty=oneline --abbrev-commit

# Docker

https://computingforgeeks.com/install-docker-ui-manager-portainer/

https://platzi.com/clases/docker-2018/

https://linuxconfig.org/manjaro-linux-docker-installation

#### luego de instalarlo, si no corren los siguientes usar root o sudo siempre
#### y si sale "docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?", correr (bajo root) el demonio docker:
	systemctl start docker
	docker container ls
	docker image ls
	docker version
	docker info

#### crear contenedor:
entrar como root o sudo siempre
    
	docker container run --name micontenedor0 --publish 8080:80 nginx:latest
	#docker container run --name my-www-container --publish 8081:80 my-nginx-html

#### en un navegador:
http://localhost:8080 (aparece nginx <- está corriendo en la máquina)

#### **Dockerfile es para tener una imagen, una forma de traer una plantilla**
#### cómo se usa esa imagen:
 hub.docker.com

#### crear otro contenedor con la imagen de una plantilla descargada de un repositorio:
hacer el Dockerfile y dejarlo en la misma carpeta

	git clone https://github.com/jestrade/html-template
	sudo docker image build -t minginx .
	sudo docker container run -d --name micontenedor2 --publish 8081:80 minginx
<!-- la bandera -d es para que corra en segundo plano y no ocupe el terminal -->

http://localhost:8081 
<!-- ¿sudo docker run minginx, ¿correr imagen -->
