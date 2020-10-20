import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoCard from "./InfoCard"
import Map from "./Map"
import Searchbar from "./Searchbar"
import Footer from "./Footer"

const App = () => {
    const [addr, setAddr] = useState(`8.8.8.8`)
    const [search, setSearch] = useState('')
    const [info, setInfo] = useState('')
    const [loc, setLoc] = useState([37.4223, -122.085])
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API}&ipAddress=${addr}`)
            .then(res => {
                console.log(res.data)
                setInfo(res.data)
                setLoc([res.data.location.lat, res.data.location.lng])
            }).catch(err => {
                console.log(err)
            })
    }, [addr])

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddr(search)
        setSearch('')
    }

    return (
        <div className="app">
            <Searchbar search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
            {info ?
                <InfoCard info={info} />
                : null
            }
            <Map position={loc} />
            <Footer />
        </div>
    )
}

export default App
