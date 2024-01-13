from django import forms, core
from core import models

from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class OrderSearch(forms.Form):
    email = forms.CharField(
        required=False,
        widget=forms.TextInput(
            attrs={'placeholder': 'Enter your email', 'class': 'form-group'})
    )

    def clean_email(self):
        email = self.cleaned_data['email']
        if validate_email(email):
            return email
        else:
            raise core.exceptions.ValidationError('Email entered incorrectly')

    class Meta:
        model = models.Order
        fields = '__all__'



class OrderActions(forms.ModelForm):
    def clean_name(self):
        name = self.cleaned_data['name']
        if name.isnumeric() or ('/' in name):
            raise core.exceptions.ValidationError('Имя должно состоять из букв')
        return name

    def clean_email(self):
        email = self.cleaned_data['email']
        if validate_email(email):
            return email
        else:
            raise core.exceptions.ValidationError('Email entered incorrectly')

    class Meta:
        model = models.Order
        fields = ['id', 'customer_id', 'order_cost', 'date_time']