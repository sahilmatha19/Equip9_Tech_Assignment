# Equip9_Tech_Assignment

## Overview
This project is a User Registration and Authentication System developed using **Spring Boot** for the backend and **ReactJS** for the frontend. The application allows users to register, log in, and manage their account details with social media login options (Google, Facebook, and Apple ID). The system supports full CRUD operations and includes the necessary database structure to store user information securely, including hashed passwords and timestamped entries.

## Steps Involved

### Step 1: Registration Page

- **Fields:**
  1. First Name
  2. Last Name
  3. Mobile Number (Demo: Any 10 digits)
  4. Password (hashed in the database)

- **Social Media Login Options:**
  1. Login by Google
  2. Login by Facebook
  3. Login by Apple ID

- **CSS Color Combination:**
  Choose any suitable color combination for the page design.

### Step 2: Database Schema

- A registration table in MySQL is used to store user details.
- **Columns Required:**
  1. `id` (Primary Key)
  2. `first_name`
  3. `last_name`
  4. `mobile_number`
  5. `password` (hashed)
  6. `created_date` (UTC format)
  7. `created_by`
  8. `updated_date` (UTC format)
  9. `updated_by`

- Ensure that all passwords are hashed, and all date fields are in UTC format.

### Step 3: Stored Procedures

Create stored procedures to handle the following database operations:

1. **Select**: Retrieve records from the registration table.
2. **Create**: Insert new records.
3. **Update**: Modify existing records.
4. **Delete**: Remove records.

### Step 4: REST API Implementation

The backend must expose REST APIs for the following HTTP operations:

1. **POST**: Create a new user record.
2. **GET**: Retrieve user details from the table.
3. **PUT**: Update existing user records.
4. **DELETE**: Delete a user record.

### Step 5: User Registration and Login

1. **Registration Flow**:
   - User enters their details (First Name, Last Name, Mobile Number, Password).
   - After successful registration, the user is redirected to the login page.

2. **Login Flow**:
   - The login page prompts for the mobile number and password.
   - The password is matched and validated.
   - If valid, an access token is generated to authenticate the user.
   - If authentication is successful, the user is redirected to a landing page with a personalized greeting: "Good Morning/Afternoon/Evening Mr. [First Name] [Last Name]".

### Step 6: Logout

- Provide a **Logout** button on the right corner of the page to allow users to log out.
  
### Technologies Used

- **Backend**: Spring Boot (Java)
- **Frontend**: ReactJS (JavaScript)
- **Database**: MySQL (Open Source)
- **Authentication**: JSON Web Tokens (JWT) for session management
- **Password Hashing**: BCrypt for hashing passwords
- **CSS**: Custom styling with a chosen color combination

