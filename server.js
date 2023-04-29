import app from './app';
import './src/database';

const port = process.env.PORT;
app.listen(port, () => console.log(`Api running on port ${port}`));