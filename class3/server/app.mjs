console.log("sbkjd");
import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
const port = process.env.PORT || 3000
// 192.168.100.21:3000
app.get('/', (req, res) => {
    res.send('Hello World! I am Bushra Tariq')
})

app.get('/weather/:cityName', (req, res) => {
    console.log("weatherApp")
    let weatherData = {
        karachi: {
            city: "karachi",
            tempInC: 28,
            humidity: 56,
            high: 32,
            low: 23
        },
        islamabad: {
            city: "islamabad",
            tempInC: 18,
            humidity: 46,
            high: 32,
            low: 26
        },
        lahore: {
            city: "lahore",
            tempInC: 23,
            humidity: 56,
            high: 32,
            low: 23
        },
        multan: {
            city: "multan",
            tempInC: 28,
            humidity: 56,
            high: 32,
            low: 23
        },
        peshawar: {
            city: "peshawar",
            tempInC: 28,
            humidity: 56,
            high: 32,
            low: 23
        }
    }
    let userCity = req.params.cityName.toLowerCase()
    let sendWeatherData = weatherData(userCity)
    if(sendWeatherData){
        res.send(sendWeatherData)
    }
    else{
        res.status(404).send(`The city ${req.params.cityName} not found`)
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})