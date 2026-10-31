# Django - Easy

from django.contrib import admin
from django.urls import path, include
from hello_world_app.views import hello_world

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', hello_world),
]
