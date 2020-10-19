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
                <p className="info">{info.location.city}, {info.location.region}, {info.location.country}</p>
            </div>
            <div>
                <p className="title">Timezone</p>
                <p className="info">{info.location.timezone}</p>
            </div>
            <div>
                <p className="title">ISP</p>
                <p className="info">{info.isp}</p>
            </div>
        </div>
    )
}

export default InfoCard
