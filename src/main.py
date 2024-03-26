


from flask import Flask, request, jsonify , send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from io import *

#fixing cors origin

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000', 'http://192.168.0.103'])

#connecting to sql

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/karona1'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#regestration class component

class Reg(db.Model):
    name = db.Column(db.String(100))
    username = db.Column(db.String(100), primary_key=True)
    date = db.Column(db.String(100))
    password = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True) 
    phone = db.Column(db.String(100), unique=True) # Add email field

    def __init__(self, name, username, date, password, email,phone):  # Update constructor
        self.name = name
        self.username = username
        self.date = date
        self.password = password
        self.email = email
        self.phone=phone


# userprofile table component 

class UserProfile(db.Model):
    _tablename_ = 'UserProfile'
    username = db.Column(db.String(100), primary_key=True)
    bio = db.Column(db.Text)
    profile_image = db.Column(db.LargeBinary)

    def _init_(self, username, bio, profile_image):
        self.username = username
        self.bio = bio
        self.profile_image = profile_image


 # login condition 

@app.route('/login', methods=["POST"])
def login():
    if request.method == "POST":
        data = request.json
        if 'password' not in data or 'identifier' not in data:
            return jsonify({'error': 'Invalid request data'}), 400
        
        password = data['password']
        identifier = data['identifier']
        
        # Check if identifier is username, email, or phone
        user = Reg.query.filter((Reg.username == identifier) | (Reg.email == identifier) | (Reg.phone == identifier)).first()

        if user:
            if password == user.password:
                return jsonify({'message': 'Successfully logged in', 'username': user.username , 'email':user.email , 'phone':user.phone}), 200
            else:
                return jsonify({'error': 'Incorrect password'}), 401
        else:
            return jsonify({'error': 'User not found'}), 404



# email condition
        

@app.route('/verify-email', methods=['POST'])
def verify_email():
    if request.method == "POST":
        data = request.json
        if 'email' not in data:
            return jsonify({'error': 'Invalid request data'}), 400
        email = data['email']
        # You can implement email verification logic here
        return jsonify({'message': 'Email verified successfully', 'email': email}), 200
    
# phone number condition

@app.route('/phone', methods=['POST'])
def phone():
    if request.method == "POST":
        data = request.json
        if 'phone' not in data:
            return jsonify({'error': 'Invalid request data'}), 400
        phone = data['phone']
        # You can implement email verification logic here
        return jsonify({'message': 'phone verified successfully', 'phone': phone}), 200
    

# regestrtaion condition
    

@app.route('/reg', methods=['POST'])
def registration():
    if request.method == "POST":
        data = request.json
        if 'name' not in data or 'username' not in data or 'date' not in data or 'password' not in data or 'email' not in data or 'phone' not in data:
            return jsonify({'error': 'Invalid request data'}), 400
        name = data['name']
        username = data['username']
        date = data['date']
        password = data['password']
        email = data['email']
        phone = data['phone']
        
        # Check if the phone number already exists
        if Reg.query.filter_by(phone=phone).first():
            return jsonify({'error': 'Phone number already exists'}), 409

        # Check if the username already exists
        if Reg.query.filter_by(username=username).first():
            return jsonify({'error': 'Username already exists'}), 409
        
        # Check if the email already exists
        if Reg.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), 409

        # If everything is fine, add the new user to the database
        new_user = Reg(name=name, username=username, date=date, password=password, email=email, phone=phone)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Successfully added data'}), 201

    

#name getting condition

@app.route('/profile/name/<string:username>', methods=['GET'])
def get_user_name(username):
    user = Reg.query.filter_by(username=username).first()
    if user:
        return jsonify({'name': user.name}), 200
    else:
        return jsonify({'error': 'User not found'}), 404



# user profile table updation

@app.route('/profile/update', methods=['POST'])
def update_profile():
    if request.method == 'POST':
        username = request.form.get('username')
        bio = request.form.get('bio')
        image = request.files.get('image')
        
        user_profile = UserProfile.query.filter_by(username=username).first()
  
        if user_profile:
            if bio is not None:
                user_profile.bio = bio
            
            if image is not None:
                image_data = image.read()  # Read binary data from file
                user_profile.profile_image = image_data  # Update profile image with new data
            
            db.session.commit()
            return jsonify({'message': 'Profile updated successfully'}), 200
        else:
            # If the user profile does not exist, create a new record
            obj = UserProfile(username=username, bio=bio, profile_image=image.read() if image else None)
            db.session.add(obj)
            db.session.commit()
            return jsonify({'message': 'New profile created successfully'}), 201

# condition for fetching profile image

@app.route('/profile/image/<username>', methods=['GET'])
def get_profile_image(username):
    user_profile = UserProfile.query.filter_by(username=username).first()
    if user_profile:
        if user_profile.profile_image:  # Check if profile image exists
            return send_file(BytesIO(user_profile.profile_image), mimetype='image/jpeg')
        else:
            return jsonify({'error': 'Profile image not found'}), 404
    else:
        return jsonify({'error': 'User not found'}), 404

# condition for fetching bio
@app.route('/profile/bio/<username>', methods=['GET'])
def get_user_bio(username):
    user_profile = UserProfile.query.filter_by(username=username).first()
    if user_profile:
        return jsonify({'bio': user_profile.bio})
    else:
        return jsonify({'error': 'User not found'}), 404

# Route to handle username update
@app.route('/profile/edit-username', methods=['POST'])
def edit_username():
    # Get data from the request
    data = request.json
    current_username = data.get('currentUsername')
    new_username = data.get('newUsername')

    # Check if the new username already exists
    existing_user = Reg.query.filter_by(username=new_username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400

    # Find the user in the database and update the username
    user = Reg.query.filter_by(username=current_username).first()
    if user:
        # Update username in Reg table
        user.username = new_username
        # Update username in UserProfile table
        user_profile = UserProfile.query.filter_by(username=current_username).first()
        if user_profile:
            user_profile.username = new_username
        # Commit changes to the database
        db.session.commit()
        return jsonify({'message': 'Username updated successfully'}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

# Route to delete profile picture
@app.route('/profile/delete-image/<username>', methods=['DELETE'])
def delete_profile_image(username):
    user_profile = UserProfile.query.filter_by(username=username).first()
    if user_profile:
        user_profile.profile_image = None  # Remove profile image data
        db.session.commit()
        return jsonify({'message': 'Profile picture deleted successfully'}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=9889)
