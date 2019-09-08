#!/bin/bash
echo "Corriendo contenedor para modo de desarrollo...."
docker run -it --rm --name loopbackdev -p 3000:3000 -v $PWD/src:/home loopback:1.0 /bin/bash