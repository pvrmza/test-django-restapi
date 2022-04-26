from django.db import models

# Create your models here.
class Incidente(models.Model):
    ID = models.AutoField(primary_key=True)
    Fecha = models.DateTimeField('Fecha')
    Descripcion = models.CharField(max_length=255)