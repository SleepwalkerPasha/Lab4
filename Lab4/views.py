import webbrowser
from django.views.decorators.csrf import csrf_exempt

from django.http import HttpResponse
from django.shortcuts import render
import requests


@csrf_exempt
def main_page(request):
    return render(request, 'index.html')


@csrf_exempt
def profile_page(request):
    return render(request, 'profile.html')


@csrf_exempt
def saved_page(request):
    return render(request, 'saved.html')


@csrf_exempt
def search_page(request):
    return render(request, 'search.html')


@csrf_exempt
def thanks_page(request):
    return render(request, 'thank_you.html')


@csrf_exempt
def apiToBot(request):
    token = '5098402623:AAHzRMYLdGGuOhf4ntA-7-Lzc9yPFjbEHSo'
    chat_id = -623666216
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    is_private = request.POST.get('is_private', False)
    txt = ''
    login = request.POST['uname']

    txt += "Username with login: " + login + " just logged in\n"
    dict = {'chat_id': chat_id, 'text': txt}
    requests.post(url, data=dict)

    return thanks_page(request)
