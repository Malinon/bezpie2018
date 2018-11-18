import json
import sys
from selenium import webdriver


print("Dostepne strony: ")


with open('data.json') as f:
    data = json.load(f)

    for index, ent in enumerate(data):
        if not ent["_source"]["layers"]:
            continue
        print index,":", ent["_source"]["layers"]["http.host"][0].encode("ascii","replace")

    id = input('Wybierz ID:')

    host = data[id]["_source"]["layers"]["http.host"][0].encode("ascii","replace")
    raw_cookie = data[id]["_source"]["layers"]["http.cookie"][0].encode("ascii","replace")
    cookies = raw_cookie.split("; ")

    driver = webdriver.Chrome("/home/jakub/chromedriver")
    driver.get("http://"+host+"/")

    for c in cookies:
        temp = c.split("=")
        driver.add_cookie({'name':temp[0], 'value':temp[1], 'path':'/'})

    print("Odswiez przegladarke")
