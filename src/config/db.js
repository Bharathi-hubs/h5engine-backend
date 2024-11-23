const mongoose = require('mongoose');

const connectDB = async () => {
    // ANSI Color Codes for formatting
    const COLORS = {
        green: '\x1b[32m',
        red: '\x1b[31m',
        bold: '\x1b[1m',
        reset: '\x1b[0m',
    };

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`${COLORS.green}${COLORS.bold}✅ MongoDB Connected${COLORS.reset}`);
    } catch (error) {
        console.error(`${COLORS.red}${COLORS.bold}❌ Error: ${error.message}${COLORS.reset}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
