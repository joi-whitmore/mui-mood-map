# MUI Mood Map

Welcome to the **MUI Mood Map**! This project is a mood-based task prioritizer designed to help users manage their tasks by aligning them with their current mood or energy level. This app allows users to input tasks and filter them based on their current mood, helping them to prioritize what best fits their mindset.

## Features

- **Add New Tasks**: Users can add tasks with a title, description, and type (e.g., Creative, Focused, Energized).
- **Mood Selection**: Select your current mood (e.g., Energized, Focused, Creative, Tired) to see tasks that fit best with that mood.
- **Task Filtering**: Tasks are filtered based on your mood to help you decide which to tackle, depending on how you feel.
- **Dark Mode Support**: The app features a dark mode design with mood-based button colors.
- **Task Persistence**: Tasks are persisted using a PostgreSQL database, ensuring they stay even if the page is refreshed.
- **Mark Task as Completed**: Users can check off tasks as completed, which applies a strikethrough effect to the text.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **Material UI**: For UI components and theming.
- **Node.js & Express**: For creating the backend API.
- **PostgreSQL**: For persisting tasks data.
- **Axios**: For making API requests to the backend server.

## Project Setup

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** and **npm** installed.
- **PostgreSQL** installed and running.
- **Git** for version control.

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/joi-whitmore/mui-mood-map.git
   cd mui-mood-map
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up PostgreSQL Database**

   - Create a PostgreSQL database named `mood_map_db`.
   - Update the database configuration in `backend/config/config.json` with your PostgreSQL credentials.

4. **Run Migrations**

   To set up the database tables:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the Backend Server**

   To run the Express server that handles the API:

   ```bash
   cd backend
   npm run dev
   ```

   The server will run at [http://localhost:5003](http://localhost:5003).

6. **Start the React Application**

   ```bash
   npm start
   ```

   The application will run on [http://localhost:3000](http://localhost:3000).

### Usage Instructions

- **Add Task**: Use the "Task Title", "Task Description", and "Task Type" fields to create a new task, then click "Add Task".
- **Select Mood**: Choose your current mood (Energized, Focused, Creative, Tired) to filter tasks.
- **Complete Task**: Check off a task to mark it as completed.
- **Delete Task**: Remove tasks that are no longer needed.

## Folder Structure

- **`/src`**: Contains all React code for the components.
- **`/components`**: Components such as `MoodSelector`, `TaskInput`, and `ToDoList` are in this folder.
- **`/backend`**: Contains the backend Express server, database models, and routes.

## Available Endpoints

The backend server runs at [http://localhost:5003](http://localhost:5003), and the following endpoints are available:

- **GET** `/tasks`: Fetch all tasks.
- **POST** `/tasks`: Add a new task.
- **PATCH** `/tasks/:id`: Update a specific task.
- **DELETE** `/tasks/:id`: Delete a specific task.

## Future Enhancements

- **User Authentication**: Implement user authentication to allow different users to maintain their own task lists.
- **Task History and Analytics**: Track completed tasks and provide insights such as most productive moods or common task types.
- **Drag-and-Drop Task Ordering**: Allow users to manually reorder tasks using drag-and-drop functionality.
- **Notifications**: Add reminder notifications for upcoming or overdue tasks.

## Contributing

Feel free to **fork** this repository and submit **pull requests** for new features, bug fixes, or improvements. Any contributions are welcome!

## License

This project is licensed under the **MIT License**.

## Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [joi-whitmore](https://github.com/joi-whitmore)
- **Email**: [joiwhitmore@gmail.com](mailto:joiwhitmore@gmail.com)

---
Thank you for checking out **MUI Mood Map**! Stay productive and aligned with your moods! 😊

