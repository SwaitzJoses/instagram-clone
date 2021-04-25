import express from 'express'
import dotenv from "dotenv";
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js'

import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'

dotenv.config();
connectDB() 

const app = express();

app.use(express.json());
app.use(morgan('dev'))


////////////////////////////////////
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)

  // 🔥  ✔️  🚀
 
const PORT=process.env.PORT || 5000
app.listen(5000, () => {
    console.log(`Hi Master! App listening on port ${PORT}!`.yellow.inverse);
  }); 