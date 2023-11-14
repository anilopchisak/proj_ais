from django.contrib import admin

from .models import Customer, Order, ProductType, Product, PaymentType, Payment, OrderProduct

admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(ProductType)
admin.site.register(Product)
admin.site.register(PaymentType)
admin.site.register(Payment)
admin.site.register(OrderProduct)

# Register your models here.
