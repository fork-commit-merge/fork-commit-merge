# Django - Easy

from django.contrib import admin
from django.urls import path, include
from hello_world_app import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/',views.hello_world),
]
