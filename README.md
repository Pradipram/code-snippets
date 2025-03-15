# Code Snippets

A web application that allows users to add, edit, and manage code snippets efficiently. Built using **Next.js** and **Prisma**.

## Features

- Add new code snippets.
- Edit existing snippets.
- Manage snippets with a clean and user-friendly interface.

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM

## Installation

### Prerequisites

- Node.js (>= 14.x)
- PostgreSQL / MySQL / SQLite (as per Prisma configuration)

### Steps to run locally

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/code-snippets.git
   cd code-snippets
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the database:
   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL="your-database-connection-url"
     ```
   - Apply Prisma migrations:
     ```sh
     npx prisma migrate dev --name init
     ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Usage

- Open the application in the browser.
- Use the UI to add and edit code snippets.

## Contributing

Pull requests are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
