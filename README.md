Dream Estate
Overview
Dream Estate is a comprehensive platform designed to connect home seekers with home owners. The application simplifies the process of finding or listing properties, making it easier for users to navigate the real estate market. Leveraging modern technologies, Dream Estate offers a seamless and secure experience for all users.

Features
Google Authentication: Secure and easy login with Google.
Firebase & Firestore: Real-time data management and authentication.
Property Listings: Homeowners can list their properties with detailed descriptions, images, and prices.
Property Search: Home seekers can search for properties based on location, price range, and other criteria.
Responsive Design: Optimized for both desktop and mobile viewing.
Real-Time Messaging: Home seekers can directly contact homeowners through the platform.
Favorites: Users can save their favorite properties for easy access later.
Tech Stack
Frontend:

React
Context API
CSS & Tailwind CSS
Firebase Authentication
Firestore for data management
Backend:

Node.js
Express.js
MongoDB
Deployment:

Frontend hosted on [Netlify/Render]
Backend hosted on [Render/Heroku]
Installation
Clone the Repository:
Clone the repository and navigate to the project directory:
bash
Copy code
git clone https://github.com/vaibhavdixit09/vaibhavdixit09-DreamEstate.git
cd dream-estate
Backend Setup:
Navigate to the backend directory:

bash
Copy code
cd backend
Install the necessary packages:

bash
Copy code
npm install
Create a .env file in the backend directory and configure the following environment variables:

plaintext
Copy code
PORT=5000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
Start the backend server:

bash
Copy code
npm start
Frontend Setup:
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the necessary packages:

bash
Copy code
npm install
Create a .env file in the frontend directory and add the following:

plaintext
Copy code
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
Start the React development server:

bash
Copy code
npm start
Usage
Home Seekers: Browse through the property listings, filter based on your preferences, and contact homeowners directly through the platform.
Home Owners: List your properties by providing detailed information, images, and pricing. Manage your listings and respond to inquiries.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Google Cloud Platform for authentication.
MongoDB for the database.
Firebase for real-time database management.
Render for hosting the backend.
