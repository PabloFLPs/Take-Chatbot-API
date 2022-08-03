// Importing "express":
import express from "express"

// Defining our app:
const app = express()

// Defining our port if the "process.env.PORT" is not defined.
const PORT = process.env.PORT || 3000

// Our API listener:
app.listen(PORT, () => console.log(`App running on port ${PORT}`))
