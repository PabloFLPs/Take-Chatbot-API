// Importing "express":
import express from "express"

// Defining our app:
const app = express()
app.use(express.json())

// Defining our port if the "process.env.PORT" is not defined.
const PORT = process.env.PORT || 3000

// Our API listener:
app.listen(PORT, () => console.log(`App running on port ${PORT}`))

// Defining Github user:
const githubUser = "takenet"

// Fetching repositories JSON data:
const fetchingData = await fetch(`https://api.github.com/orgs/${githubUser}/repos`)
let repositories = await fetchingData.json()

// Filtering all repositories that has C# as language attribute:
repositories.filter((data) => {data.language = "C#"})
//console.log(repositories)

// Sorting in ascending order (from older to newer):
repositories.sort((a, b) => a.created_at.localeCompare(b.created_at))
//console.log(repositories)

// Getting the 5 older repositories:
repositories = repositories.slice(0, 5)

// Sending JSON data with all 5 requested repositories:
app.get("/", (req, res) => res.json(repositories))

// Repository name:
app.get("/1-name", (req, res) => res.json(repositories[0].name))
app.get("/2-name", (req, res) => res.json(repositories[1].name))
app.get("/3-name", (req, res) => res.json(repositories[2].name))
app.get("/4-name", (req, res) => res.json(repositories[3].name))
app.get("/5-name", (req, res) => res.json(repositories[4].name))

// Repository description:
app.get("/1-description", (req, res) => res.json(repositories[0].description))
app.get("/2-description", (req, res) => res.json(repositories[1].description))
app.get("/3-description", (req, res) => res.json(repositories[2].description))
app.get("/4-description", (req, res) => res.json(repositories[3].description))
app.get("/5-description", (req, res) => res.json(repositories[4].description))
