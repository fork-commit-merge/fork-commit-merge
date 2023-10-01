from django.urls import path
from hello_world_app import views

urlpatterns = [
    path('', views.hello_world, name='hello_world'),
]
