import React from 'react'
import './Track.css'

export function Track({ name, artist, album, isRemoval }) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <button className="Track-action">{isRemoval ? '-' : '+'}</button>
    </div>
  )
}
