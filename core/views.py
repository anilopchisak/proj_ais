from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from . import models

def index(request):
    #return HttpResponse("Hello")
    return render(request=request, template_name='core/index.html')

# Create your views here.
