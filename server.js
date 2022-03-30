const app = require('./config/express')();
const port = app.get('port');

// Run App

app.listen(port, () =>{
   console.log(`Server is running normaly at port ${port}`);
});