from flask import Flask, jsonify,render_template,request,make_response,json
from crawler_total import crawl
# from main import merge_sort,print_list
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    if request.method =='POST':
        print("submitted")
        name = request.form.get("name")
        # print(name)
        product = crawl(name)
        numbers = len(product)
        # merge_sort(product, 0, numbers - 1)
        #
        # removeLeft = numbers//3
        # removeRight = numbers*3//4
        # product = product[removeLeft:removeRight]
        # totalPrice = 0
        # for p in product:
        #     totalPrice+=p[1]
        # averagePrice = totalPrice/len(product)
        # print(averagePrice)
        # goodproduct = []
        # for p in product:
        #     if p[1] > averagePrice/5 and p[1]<averagePrice*2:
        #         goodproduct.append(p)
        return render_template('index.html',products = product)
        # return jsonify(d)

if __name__ == "__main__":
    app.run()