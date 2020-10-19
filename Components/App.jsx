import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoCard from "./InfoCard"
import Map from "./Map"
import Searchbar from "./Searchbar"

const App = () => {
    const [ipAddr, setIpAddr] = useState(`8.8.8.8`)
    const [loc, setLoc] = useState([37.4223, -122.085])
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API}&ipAddress=${ipAddr}`)
            .then(res => {
                console.log(res.data)
                console.log(res.data.location.lat, res.data.location.lng)
                setLoc([res.data.location.lat, res.data.location.lng])
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <Searchbar />
            <InfoCard />
            <Map position={loc} />
        </div>
    )
}

export default App
