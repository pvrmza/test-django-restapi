from base.incidente.models import Incidente
from rest_framework import serializers


class IncidenteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Incidente
        fields = ['ID', 'Fecha', 'Descripcion']