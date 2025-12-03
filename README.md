# Tarot AI App

This is a full-stack application designed to perform Tarot and Lenormand card readings, utilizing Artificial Intelligence (Google Gemini) to interpret the cards and provide answers to user questions.

## 🚀 Technologies

### Back-end
- **Node.js**
- **Fastify**: Fast and low overhead web framework.
- **TypeScript**: Typed superset of JavaScript.
- **Zod**: TypeScript-first schema declaration and validation.
- **Google Gemini AI**: Used for generating interpretations of the card spreads.
- **Docker**: Containerization.

### Front-end
- **React**: Library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS (v4)**: Utility-first CSS framework.
- **React Router**: Declarative routing for React.
- **React Hook Form**: Performant, flexible and extensible forms.
- **Lucide React**: Beautiful & consistent icons.
- **Docker**: Containerization.

## 📂 Project Structure

The project is organized as a monorepo:

- `back-end/`: Contains the API server, business logic, and AI integration.
- `front-end/`: Contains the React application and UI components.

## 🛠️ How to Run

### Prerequisites
- Docker and Docker Compose installed on your machine.

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tarot
   ```

2. **Environment Variables:**
   - Create a `.env` file in the `back-end` directory (use `.envexample` as a reference).
   - Create a `.env.development` file in the `front-end` directory if needed.

3. **Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

4. **Access the application:**
   - **Front-end:** Open [http://localhost:5173](http://localhost:5173) in your browser.
   - **Back-end API:** Running at [http://localhost:3000](http://localhost:3000).

### Accessing from Mobile (Local Network)
To access the application from a mobile device on the same Wi-Fi network:
1. Find your machine's local IP address (e.g., `192.168.x.x`).
2. Configure the `VITE_API_URL` in the frontend to point to your machine's IP.
3. Access `http://<YOUR_IP>:5173` on your mobile browser.

## ✨ Features

- **Tarot Readings**: Draw cards from the Major and Minor Arcana.
- **Lenormand Readings**: Support for Lenormand deck readings.
- **AI Interpretation**: The application sends the drawn cards and the user's question to Google Gemini AI to generate a personalized interpretation.
- **Responsive Design**: Works on desktop and mobile devices.

## 📝 License

This project is licensed under the ISC License.
