import { useEffect, useState } from 'react'
import { Duration } from 'luxon'
import { ClipLoader } from 'react-spinners'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Config from '../Icons/Config'
import Play from '../Icons/Play'
import Pause from '../Icons/Pause'
import Previous from '../Icons/Previous'
import Following from '../Icons/Following'

import PLAYER_STATE from './PLAYER_STATE'
import styles from './styles'

export default function PlayerControls({
  playerState,
  duration,
  playedTime,
  controls,
  handlePlay,
  handlePause,
  handleHiddeControls,
  handleRewing,
  handleGoFoward,
  handleOnBeforeSliderChange,
  handleOnAfterSliderChange,
}) {
  const [value, setValue] = useState(0)
  const [playedText, setPlayedText] = useState('')
  const durationText = Duration.fromObject({ seconds: duration }).toFormat(
    'hh:mm:ss'
  )

  useEffect(() => {
    setValue(playedTime)
    setPlayedText(
      Duration.fromObject({ seconds: playedTime }).toFormat('hh:mm:ss')
    )
  }, [playedTime])

  useEffect(() => {
    if (playerState == PLAYER_STATE.PLAYING) {
      const timer = setTimeout(() => {
        handleHiddeControls()
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [playerState, controls])

  const handleOnChange = (value) => {
    setValue(value)
    setPlayedText(Duration.fromObject({ seconds: value }).toFormat('hh:mm:ss'))
  }

  return (
    <>
      <div
        className={`absolute inset-0 bg-black/60 z-20 ${
          controls ? 'visible' : 'hidden'
        }`}
        onClick={handleHiddeControls}
      >
        <div className="w-full flex justify-end absolute top-0">
          <button className="p-3" onClick={(e) => e.stopPropagation()}>
            <Config fill="#fff" />
          </button>
        </div>
        <div className="w-full flex items-center justify-evenly absolute top-1/2 -translate-y-1/2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleRewing()
            }}
          >
            <Previous width={36} height={36} fill="#fff" />
          </button>
          {playerState == PLAYER_STATE.BUFFERING && (
            <ClipLoader
              color={'#ffffff'}
              loading={true}
              size={56}
              speedMultiplier={0.9}
            />
          )}
          {(playerState == PLAYER_STATE.UNSTARTED ||
            playerState == PLAYER_STATE.CUED ||
            playerState == PLAYER_STATE.PAUSED ||
            playerState == PLAYER_STATE.ENDED) && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePlay()
              }}
            >
              <Play width={56} height={56} fill="#fff" />
            </button>
          )}
          {playerState == PLAYER_STATE.PLAYING && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePause()
              }}
            >
              <Pause width={56} height={56} fill="#fff" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleGoFoward()
            }}
          >
            <Following width={36} height={36} fill="#fff" />
          </button>
        </div>
        <div className="w-full flex flex-col items-start py-3 px-6 absolute bottom-0">
          <div className="my-3">
            <span className="text-xs font-medium text-white">{playedText}</span>
            <span className="text-xs font-medium text-white/60"> / </span>
            <span className="text-xs font-medium text-white/60">
              {durationText}
            </span>
          </div>
          <div className="w-full" onClick={(e) => e.stopPropagation()}>
            <Slider
              min={0}
              max={duration}
              step={0.1}
              trackStyle={{ background: '#FF0000' }}
              railStyle={{ background: 'rgba(256,256,256,0.3)' }}
              handleStyle={{
                backgroundColor: '#FF0000',
                borderColor: '#FF0000',
              }}
              value={value}
              onBeforeChange={handleOnBeforeSliderChange}
              onChange={handleOnChange}
              onAfterChange={handleOnAfterSliderChange}
            />
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}
