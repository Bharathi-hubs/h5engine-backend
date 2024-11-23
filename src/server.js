const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// ANSI Color Codes
const COLORS = {
    blue: '\x1b[34m',
    bold: '\x1b[1m',
    underline: '\x1b[4m',
    reset: '\x1b[0m',
};

// Start the server
app.listen(PORT, () => {
    console.log(
        `${COLORS.blue}${COLORS.bold}🚀 Server running on ${COLORS.underline}http://localhost:${PORT}${COLORS.reset}`
    );
});
