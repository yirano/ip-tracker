import React from 'react'

const Searchbar = (props) => {
    const { handleChange, handleSubmit, search } = props
    return (
        <div className="searchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="addr" value={search} onChange={e => handleChange(e)} placeholder="Search for any IP address or domain" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Searchbar
