# Pictures

Initial Architecture:
UI:
1. Login - username, password, submit button (forgot pwd), sign up
2. Sign up Page : User name, password, ocmfirm password, email ID, submit button (implicit back btn)
3. Gallery page - with all the images of signed in user. Upload image button.. 
	Toggle views feature
4. Upload image page: with successfully uploaded notification after upload

Technology: REACT JS


Backend:
1. Sign up service: POST
2. Login service: GET
3. getGalleryImages: GET (for logged in user)
4. uploadImage: POST (upload the given image for logged in user)

Technology: Node


Database:
MongoDB
Tables:
1. AppUsers: (username, pwd, email)
2. Gallery: (username, imageTag, image)


Testing:
TDD:	(UI: Jest	Backend: Karma Mocha)

Automation test:
Selenium (~~~)

APK packaging: CORDOVA
Deploy space: HEROKU
Code Repository: GITHUB (3 repos for UI, backend, automation testing)


Tasks:
1. Create login page with username, password and a submit button.
2. Implement a service to accept the passed in username, password and return the validation output whether it is success or failure.
3. Create the User table(i.e. collection) in MongoDB
4. Implement automation testing for Login page finctionality.