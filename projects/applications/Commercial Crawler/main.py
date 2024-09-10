from flask import Flask, jsonify,render_template,request,make_response,json
from crawler_total import crawl
app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():
    # if request.method == "GET":
    return render_template("test.html")
    # return "hello"

if __name__ == "__main__":
    app.run()