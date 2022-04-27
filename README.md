# test-django-restapi

Aplicacion en django para probar rest api con tocken jwt y una aplicacion javascript que consume esa api

## Para correr la prueba
- Para preparar en entorno
```
  git clone https://github.com/pvrmza/test-django-restapi.git demo
  cd demo
  
  python3 -m venv env
  source env/bin/activate
  
  pip install django
  pip install djangorestframework
```
- Corremmos el servidor
```
   python manage.py runserver 0.0.0.0:8000
```

- Para crear un usario (nos va a pedir la clave para el usuario)
```
   python manage.py createsuperuser --email test@corre.com --username usuario
```

- Para generar el token
```
   http post http://127.0.0.1:8000/api-token-auth/ username=usuario password=Cambiame01
```
- Para consumir la rest api
```
   curl -H 'Accept: application/json; indent=4' -H 'Authorization: Token 53f115f5b2e79bed5f5a92515657f87b162c41ae' http://127.0.0.1:8000/incidente/
```
