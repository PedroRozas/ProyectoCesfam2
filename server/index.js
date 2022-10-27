const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 5000;
const useroutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");
const moongose = require("mongoose");
const confirmRoutes = require("./services/quote.js");

const app = express();

//connect to database
connectDB();
app.use(express.json())
app.use(cors());

//routes
//app.use("/api/users", useroutes);
app.use("/api/auth", authRoutes);
app.use("/api/confirm", confirmRoutes);
app.use("/api/users", useroutes);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () =>console.log('Server started on port ' + port));
