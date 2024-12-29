const express = require('express');
const cors = require('cors'); // Import the CORS package

const app = express();
app.use(cors());

const characters = [
    { name: 'Monkey D. Luffy', role: 'Captain', ability: 'Gum-Gum Fruit' },
    { name: 'Roronoa Zoro', role: 'Swordsman', ability: 'Three-Sword Style' },
    { name: 'Nami', role: 'Navigator', ability: 'Clima-Tact' },
    { name: 'Usopp', role: 'Sniper', ability: 'Marksmanship' },
    { name: 'Sanji', role: 'Cook', ability: 'Black Leg Style' },
    { name: 'Tony Tony Chopper', role: 'Doctor', ability: 'Human-Human Fruit' },
    { name: 'Nico Robin', role: 'Archaeologist', ability: 'Flower-Flower Fruit' },
    { name: 'Franky', role: 'Shipwright', ability: 'Cyborg' },
    { name: 'Brook', role: 'Musician', ability: 'Revive-Revive Fruit' },
    { name: 'Jinbe', role: 'Helmsman', ability: 'Fish-Man Karate' }
];

// Root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API status route
app.get('/api', (req, res) => {
    res.send('API is working Haythem');
});

// One Piece characters route
app.get('/api/onepiece/characters', (req, res) => {
    res.json({ success: true, data: characters });
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
