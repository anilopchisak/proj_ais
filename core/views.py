from django.shortcuts import render
from . import models, forms
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q

class ProductList(ListView):
    model = models.Product
    order = models.Order
    template_name = 'core/index.html'
    context_object_name = 'products'
    context = {'products': model, 'order': order}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = forms.OrderActions
        return context

class OrderArchive(ListView):
    model = models.Order
    template_name = 'core/order_archive.html'
    context_object_name = 'orders'

    def get_queryset(self):
        email = self.request.GET.get('email')
        qs = models.Order.objects.all()
        if email:
            return qs.filter(Q(customer__email__icontains=email))
        return qs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = forms.OrderSearch(self.request.GET or None)
        return context

# def index(request):
#     #return HttpResponse("Hello")
#     return render(request=request, template_name='core/index.html')

# Create your views here.

class OrderDetail(DetailView):
    model = models.Order
    template_name= 'core/order_detail.html'
    context_object_name = 'order'