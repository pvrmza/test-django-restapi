from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token 
from base.admin import views
from base.incidente import views as IncidenteView

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'incidente', IncidenteView.IncidenteViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]