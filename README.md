## CinemaWala 🎥

**CinemaWala** is a web application designed to provide users with a comprehensive platform for discovering, showcasing, and streaming movies. This project highlights a seamless user experience by integrating modern web development practices and secure streaming technologies. The application is designed with a focus on delivering a seamless and user-friendly experience. 

Check out the live version: [CinemaWala on Netlify](https://cinemawala.netlify.app/)

## Features 🌟
- **Movie Showcase**: Browse through a curated collection of movies with trailers, descriptions, and ratings.
- **Streaming**: Watch selected movies directly within the platform.
- **Search and Filter**: Search for movies by title, genre, and release year. Filter by categories to find specific types of content.
- **Responsive Design**: Optimized for mobile and desktop users with a responsive UI built using **React JS** and **CSS Flexbox**.
- **User Authentication**: Secure login system for users to access streaming content.
- **Backend Support**: Powered by **Django** to manage user data, movie details, and handle the streaming logic.
  
## Tech Stack 🛠️
- **Frontend**: React JS, CSS Flexbox
- **Backend**: Django, Python
- **Hosting**: Netlify (for frontend deployment)
- **Database**: Integrated database for movie details and user accounts (Django ORM)

## Project Structure 📁
- **Frontend**: 
  - All React components are located in the `src/` folder.
  - API requests are handled via Axios in `services/` folder.
  
- **Backend**:
  - Django is used for managing user authentication, handling movie data, and controlling streaming functionality.
  
- **Deployed Link**: [CinemaWala on Netlify](https://cinemawala.netlify.app/)

## Installation and Setup 🚀

### 1. Clone the repository
```bash
git clone https://github.com/DeepakTayde/cinemawala.git
cd cinemawala
```

### 2. Frontend Setup

Navigate to the frontend folder and install dependencies:
```bash
npm install
npm start
```
This will start the development server at `http://localhost:3000`.

### 3. Backend Setup

Make sure to have Django and Python installed. Then navigate to the backend folder and run:
```bash
pip install -r requirements.txt
python manage.py runserver
```

The backend will run on `http://localhost:8000`.

## Usage ⚙️
- **Homepage**: Browse and discover a list of movies with their basic information.
- **Movie Details**: Click on a movie to see its detailed information, including a trailer and option to stream (if available).
- **Search**: Use the search bar or filters to find specific movies by name, genre, or other criteria.
- **Authentication**: Login or sign up to get personalized access to streaming.

## Contributing 🤝
Feel free to fork this repository, make changes, and open a pull request if you'd like to contribute! All contributions are welcome.

## License 📝
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙌
Special thanks to the open-source community for the tools and resources used in building this project.

---

Enjoy streaming with **CinemaWala**! 🍿🎬

