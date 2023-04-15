import app from './app';
import './src/database';

const port = 4000;
app.listen(port, () => console.log(`Api running on port ${port}`));