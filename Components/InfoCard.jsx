import React from 'react'

const InfoCard = (props) => {
    const { info } = props
    return (
        <div className="infoCard">
            <div>
                <p className="title">IP Address</p>
                <p>{info.ip}</p>
            </div>
            <div>
                <p className="title">Location</p>
                <p>{info.location.city}, {info.location.region}, {info.location.country}</p>
            </div>
            <div>
                <p className="title">Timezone</p>
                <p>{info.location.timezone}</p>
            </div>
            <div>
                <p className="title">ISP</p>
                <p>{info.isp}</p>
            </div>
        </div>
    )
}

export default InfoCard
