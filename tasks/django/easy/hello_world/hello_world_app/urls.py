from django.urls import path
from .views import hello_world

urlpatterns = [
    path('hello/', hello_world),
]
