const express = require('express');
const sequelize = require('./db/connection');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

sequelize.sync({ force: true }) 
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server running on port 3000`);
    });
  })
  .catch(err => console.error('DB sync error:', err));