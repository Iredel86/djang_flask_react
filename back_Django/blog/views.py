from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductSerializer
from .models import Product


# Create your views here.


def index(req):
    return HttpResponse ("hello")

@api_view(['GET'])
def getProducts(req):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)


