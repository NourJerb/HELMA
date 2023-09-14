# Project Title

HelmaCreations
It's a website for a jewelery shop

## Table of Contents

- [Installation](#installation)
- [Configuration](#Configuration)
- [Usage](#usage)
- [Main Components](#Main-Components)
- [API Routes](#API-Routes)
- [Contact](#Contact)

## Installation

1. Clone the repository.
2. run `npm install` to install frontend dependencies.
3. Navigate to the Backend folder and run `npm install` to install backend dependencies.
4. Configure environment variables for the backend, such as SMTP settings for Node Mailer.

## Configuration

1. Sign in to your Google account.
2. Select "Security."
3. Under "Signing in to Google," select "Two-Step Verification."
4. At the bottom of the page, select "App passwords."
5. Enter a name to help you remember where you'll use the app password.
6. Select "Generate."
7. To enter the app password, follow the on-screen instructions. The app password is the 16-character code generated on your device.
8. Copy this password for later use.-------------------------------------------------------------------------------------------------------
9. select the config.js file in the Backend folder : 
change 'your-email@gmail.com' by your email account (which is used to generate the password)
change 'your-email-password' by the copied (generated) password .

## Usage

1. Start the frontend: Navigate to the project root and run `npm start`.
2. Start the backend: Navigate to the backend folder and run `npm start`.
3. Access the application at `http://localhost:3000`.

## Main_Components

- Navbar: Navigation across pages.
- Categories: Product category filtering.
- Home: The home page.
- Shop: Contains all the products.
- Item: Detailed information about selected products.
- Commander: Form for making a purchase.
- Confirmer: Confirmation message.
- Contact: HelmaCreations contact information.

## API Routes

- /send-email API to send email from the shop to the client 


## Contact

If you have any technical questions, feedback, or business inquiries, feel free to contact us at junior.ensi@gmail.com.
