import React from 'react'

export default function EventCard({eventpost}) {
    console.log(eventpost);
    return (
        <div>
            <p>{eventpost.group}</p>
            <p>{eventpost.name}</p>
            <p>{eventpost.date}</p>
            <p>{eventpost.money}</p>
            <p>{eventpost.email}</p>
            <p>{eventpost.content}</p>
        </div>
    )
}
