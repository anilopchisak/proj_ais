from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'core'

urlpatterns = [
    # path('', views.index, name='index'),
    # path('', views., name=''),
    path('', views.ProductList.as_view(), name='index'),
    path('order_archive', views.OrderArchive.as_view(), name='order_archive'),
    path('order_detail/<int:pk>', views.OrderDetail.as_view(), name='order_detail'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)