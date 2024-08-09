from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def About(request):
    return render(request,'About.html')

def Skills(request):
    return render(request,'Skills.html')

def projects(request):
    return render(request,'project.html')