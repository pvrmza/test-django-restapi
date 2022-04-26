from django.shortcuts import render

# Create your views here.
from base.incidente.models import Incidente
from rest_framework import viewsets
from rest_framework import permissions
from base.incidente.serializers import IncidenteSerializer


class IncidenteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Incidente.objects.all().order_by('-Fecha')
    serializer_class = IncidenteSerializer
    permission_classes = [permissions.IsAuthenticated]
