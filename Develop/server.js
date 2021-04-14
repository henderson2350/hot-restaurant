//Dependencies
const express = require("express")
const path = require("path")

// Sets up the express app and the port
const app = express()
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

const reservations = [
    {
        name: "Clare Henderson",
        phone: 4043164330,
        email: "henderson2350@gmail.com",
        id: 14
    },
    {
        name: "Mims Reynolds",
        phone: 4048252329,
        email: "mimsreynolds@gmail.com",
        id: 17
    }
]

const waitingList = [
    {
        name: "Peyton LeCorgne",
        phone: 5042930495,
        email: "pal5pd@virginia.edu",
        id: 21
    },
    {
        name: "Mebane Garner",
        phone: 4934903948,
        email: "mebane@gmail.com",
        id: 7
    }
]

// getting the homepage when we are at the default route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"))
  })

// getting the reservations page when we are at the reservations route
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
  }
)

// getting the tables page when we are at the tables route
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
  }
)

// DISPLAYING APIS
// we get the reservations and waiting list
app.get('/api/reservations', (req, res) => res.json(reservations));
app.get('/api/waitinglist', (req, res) => res.json(waitingList));

// posting data to reservations and waiting list
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body

    console.log(newReservation)

    reservations.push(newReservation)
    console.log(reservations)

    res.json(newReservation)
})

app.post("/api/waitlist", (req, res) => {
    const newWaitlist = req.body

    console.log(newWaitlist)

    waitingList.push(newWaitlist)
    console.log(waitingList)

    res.json(newWaitlist)
})

app.get("api/test")
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
