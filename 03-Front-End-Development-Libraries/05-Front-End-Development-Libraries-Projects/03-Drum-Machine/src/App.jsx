import { useState, useEffect } from 'react'
import { drumPads } from './data/audioClips.data.js'
import s from './App.module.css'

export const App = () => {
  const [displayText, setDisplayText] = useState('')
  const [volume, setVolume] = useState(0.05)
  const [activePad, setActivePad] = useState(null)

  const handlePadClick = (padId, padKey) => {
    const audio = document.getElementById(padKey)
    audio.currentTime = 0
    audio.volume = volume
    audio.play()
    setDisplayText(padId)
  }

  const handleInteraction = (padId, padKey) => {
    handlePadClick(padId, padKey)
    setActivePad(padKey)
  }

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase()
    const pad = drumPads.find((pad) => pad.key === key)

    if (pad) {
      handleInteraction(pad.name, pad.key)
    }
  }

  const handleKeyUp = () => {
    setActivePad(null)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setDisplayText(`Volume: ${Math.round(newVolume * 100)}%`)

    drumPads.forEach(pad => {
      const audio = document.getElementById(pad.key)
      if (audio) {
        audio.volume = newVolume
      }
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div id="drum-machine" className={s.drumMachine}>
      <div id="display" className={s.display}>
        {displayText}
      </div>

      <div className={s.padContainer}>
        {drumPads.map((pad) => (
          <button
            key={pad.key}
            id={pad.id}
            className={`${s.drumPad} drum-pad ${activePad === pad.key ? s.active : ''}`}
            onClick={() => handlePadClick(pad.name, pad.key)}
          >
            {pad.key}
            <audio
              id={pad.key}
              className="clip"
              src={pad.audio}
            />
          </button>
        ))}
      </div>

      <div className={s.controls}>
        <div className={s.volumeControl}>
          <label htmlFor="volume">VOLUME</label>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ '--background-size': `${volume * 100}%` }}
          />
          <div className={s.volumeValue}>{Math.round(volume * 100)}%</div>
        </div>
      </div>
    </div>
  )
}
