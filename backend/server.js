const cors = require('cors');

app.use(cors({
    origin: ['https://froster02.github.io', 'http://localhost:3000'],
    credentials: true
}));