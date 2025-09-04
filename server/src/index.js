const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const cors = require('cors');
const userRoute = require('./router/userRoute');


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use('/api/users', userRoute);


try {
dbConnect.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Database connected successfully');
});
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
}