⚕ DocDiscovery ⚕


🛡️ Project created for Hack Knight Hackathon Fall 2024 🛡️

👥 Group Members: Sharif Ali (front-end), Jaskaran Bhogal (front-end), Alfred Siby Cyriac (full-stack), Dilver Singh (Full Stack)

👾 All team members were first time hackers 

Video Demo: https://youtu.be/2buKjjW0kuM

Dev Post: https://devpost.com/software/docdiscovery


🤔 What does DocDiscovery do?

A user enters the type of doctor they need, their personal zip code, insurance type, and specific symptoms. The program then returns a collection of the best doctors for them. These cards have a tinder like matching mechanism where user selects whether to favorite a doctor or remove them from the collection. Ultimately, the user is presented with all their favorited cards and can select their best fit doctor. Once a doctor is selected, it removes all other doctors and simply displays all information of your selected doctor.

🤔 How was DocDiscovery built (tech stack)? 

We wanted to use a flashier tech stack, but due to our limited knowledge on certain functionalities in a technology like Next.js we opted to go very plain and old school route with html5, cc3, and vanilla javascript -- this way we were all able to actively contribute. Ultimately, the program requires a user to fill in 4 required fields which are doctor type, zip code, insurance type, and any specific symptoms. These values get stored in variables that become an object and passed onto our server side. On the server side the script iterates throughout all active rows in the database and finds rows that match doctor type and insurance type exactly and searches for the closest match in zip code and doctors who specialize in the users inputted symptoms. All the rows that are best fit for the user are stored into an array that get passed back to the client side code and that data is then used to be display.

🤔 Challenges faced in the process? 

We had difficulty finding the proper API that contained all the required criteria we needed for a search result thus we had to merge 2 APIs into one database. We also didn't have prior experience with the more popular databases such as MongoDB so we opted for a more unique approach and used Google Sheets as our database and used Google App Script to pull data from 2 APIs, populate our spreadsheet, then connected our local javascript file to API deployment of the App Script.

ℹ️ Code last updated: November 10, 2024
