var express = require('express');
var app = express();
app.use(express.json());

var postRouter = require('./routes/posts');



app.use('/posts', postRouter);

app.get('/health', (req, res) => {
  res.status(200).send('healthy');
  res.end();
});

// assign port 5050
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


