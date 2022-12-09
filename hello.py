from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
@app.route("/home")
def home():
    return render_template(index.html)

@app.route("/result")
def result():
    output = request.form.to_dict()
    name = output["name"]
    
    return render_template("index.html")
        
if __name__ == "__main__":
    app.run(debug= True, port=5001)

print("hello madafaka")