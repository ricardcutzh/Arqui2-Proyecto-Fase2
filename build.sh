#!/bin/bash
# <YYYY-mm-ddTHH:MM:ssZ>
echo "Creando la imagen de docker..."
docker build -t loopback:1.0 .
echo "Build terminado..."