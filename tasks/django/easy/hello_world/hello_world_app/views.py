# Django - Easy

from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, World!")
