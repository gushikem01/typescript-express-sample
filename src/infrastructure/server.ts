import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8888, () => {
  console.log('listening on port 8888')
})

/**router */
app.use('/api', router);

export default app;
