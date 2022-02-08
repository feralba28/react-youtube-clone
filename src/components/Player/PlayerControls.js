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
    setPlayedText(
      Duration.fromObject({ seconds: value }).toFormat('hh:mm:ss')
    )
  }

  return (
    <>
      <div
        className={`controls-container ${controls ? 'visible' : 'hidden'}`}
        onClick={handleHiddeControls}
      >
        <div className="row p-none jc-end controls-top">
          <div className="col p-2">
            <Config className="vertical-align-middle" fill="#fff" />
          </div>
        </div>
        <div className="row p-none jc-evenly controls-middle">
          <div className="col p-none" onClick={(e) => {
                e.stopPropagation()
                handleRewing()
              }}>
            <Previous
              width={36}
              height={36}
              className="vertical-align-middle"
              fill="#fff"
            />
          </div>
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
            <div
              className="col p-none"
              onClick={(e) => {
                e.stopPropagation()
                handlePlay()
              }}
            >
              <Play
                width={56}
                height={56}
                className="vertical-align-middle"
                fill="#fff"
              />
            </div>
          )}
          {playerState == PLAYER_STATE.PLAYING && (
            <div
              className="col p-none"
              onClick={(e) => {
                e.stopPropagation()
                handlePause()
              }}
            >
              <Pause
                width={56}
                height={56}
                className="vertical-align-middle"
                fill="#fff"
              />
            </div>
          )}
          <div className="col p-none" onClick={(e) => {
                e.stopPropagation()
                handleGoFoward()
              }}>
            <Following
              width={36}
              height={36}
              className="vertical-align-middle"
              fill="#fff"
            />
          </div>
        </div>
        <div className="row fd-col ai-start py-2 px-4 controls-bottom">
          <div className="col p-none my-2">
            <span className="fs-12 fw-500 color-white">{playedText}</span>
            <span className="fs-12 fw-500 color-light-grey"> / </span>
            <span className="fs-12 fw-500 color-light-grey">
              {durationText}
            </span>
          </div>
          <div
            className="col w-100 p-none"
            onClick={(e) => e.stopPropagation()}
          >
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
