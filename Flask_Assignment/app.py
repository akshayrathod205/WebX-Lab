from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    fruit_name = request.form['fruit_name']
    fruit_id = request.form['fruit_id']
    fruit_quantity = request.form['fruit_quantity']
    overall_experience = request.form['overall_experience']
    fruit_nutrients = request.form['fruit_nutrients']
    fruit_recommendation = request.form['fruit_recommendation']

    return render_template('thank_you.html', 
                           fruit_name=fruit_name, 
                           fruit_id=fruit_id, 
                           fruit_quantity=fruit_quantity, 
                           overall_experience=overall_experience, 
                           fruit_nutrients=fruit_nutrients, 
                           fruit_recommendation=fruit_recommendation)

if __name__ == '__main__':
    app.run(debug=True)
