import requests
import re 
import url_manager
import urllib.request, urllib.error
from bs4 import BeautifulSoup
import io

def askURL(url):
    head = {  
        "User-Agent": "Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 80.0.3987.122  Safari / 537.36"
    }

    request = urllib.request.Request(url, headers=head)
    html = ""
    try:
        response = urllib.request.urlopen(request)
        html = response.read().decode("utf-8")
    except urllib.error.URLError as e:
        if hasattr(e, "code"):
            print(e.code)
        if hasattr(e, "reason"):
            print(e.reason)
    return html

product = input("Please enter your product: ")
product = product.replace(" ", "+")

root_url = "https://www.amazon.ca/s?k="+product
fout = open("projects/applications/Commercial Crawler/source.txt","w",encoding="utf-8")
source = askURL(root_url)
fout.write(source)
fout.close()
soup = BeautifulSoup(source,"html.parser")
websites = []
links = soup.find_all("a", {'class':'a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal'})
for link in links:
    href = link.get('href')
    if not href:
         continue
    x =  re.findall("^/sspa",href)
    if not x:
        href = "https://www.amazon.ca/"+href
        websites.append(href)
        
print(len(websites))      
prices = soup.find_all("span",{"class":"a-price-whole"})
for price in prices:
    print(price)
# for website in websites:
#     print(website)
#     source = askURL(website)
#     soup = BeautifulSoup(source,"html.parser")
#     prices = soup.find_all("span",{"clsss":"a-price a-text-price a-size-medium apexPriceToPay"})
#     for price in prices:
#         print(price)
        
#     break
    







