# ⚕️ DocDiscovery ⚕️  
**Project created for HackKnight Hackathon, Fall 2024**

### 👥 Team Members
- **Sharif Ali** - Front-end
- **Jaskaran Bhogal** - Front-end
- **Alfred Siby Cyriac** - Full-stack
- **Dilver Singh** - Full-stack  
*All team members were first-time hackers!*

### 📽️ Demo & DevPost
- [Video Demo](https://youtu.be/2buKjjW0kuM)
- [DevPost Submission](https://devpost.com/software/docdiscovery)

---

### 🤔 About DocDiscovery
DocDiscovery helps users find doctors tailored to their needs. Users provide:
1. **Doctor Type**
2. **Zip Code**
3. **Insurance Type**
4. **Symptoms**

The program returns a collection of matching doctors, with a Tinder-like swiping feature for users to favorite or remove doctors. Users ultimately receive a list of their favorited doctors to choose their best fit. Once a doctor is selected, only their information remains displayed.

### 💻 Tech Stack
DocDiscovery was built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Due to time constraints and the team's limited experience with Next.js, we opted for a more straightforward approach so everyone could contribute.

1. **Client Side**: Collects user inputs and sends them to the server.
2. **Server Side**: Searches the database for matching doctors based on doctor type, zip code, insurance, and symptoms. Results are passed back to the client for display.

### 🚀 Challenges We Overcame
- **API Limitations**: Finding a single API with our search criteria was tough, so we merged data from two APIs.
- **Database Choice**: Without MongoDB experience, we used **Google Sheets** as our database. We populated the sheet with data from the APIs via **Google Apps Script** and connected it to our JavaScript file.

---

### 📅 Last Updated
*November 10, 2024*



