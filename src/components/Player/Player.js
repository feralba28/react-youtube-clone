import { useEffect, useReducer } from 'react'
import useYoutube from '../../hooks/useYoutube'

import PlayerControls from './PlayerControls'

import PLAYER_STATE from './PLAYER_STATE'
import styles from './styles'

const initialState = {
  playerState: PLAYER_STATE.UNSTARTED,
  duration: null,
  playedTime: 0,
  controls: false,
}

const ACTIONS = {
  CUED_VIDEO: 'cued_video',
  BUFFERING_VIDEO: 'buffering_video',
  ENDED_VIDEO: 'ended_video',
  PLAY_VIDEO: 'play_video',
  PAUSE_VIDEO: 'pause_video',
  SHOW_CONTROLS: 'show_controls',
  HIDDE_CONTROLS: 'hidde_controls',
  SET_DURATION: 'set_duration',
  SET_PLAYED_TIME: 'set_played_time',
  RESET: 'reset',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CUED_VIDEO:
      return {
        ...state,
        playerState: PLAYER_STATE.CUED,
      }
    case ACTIONS.BUFFERING_VIDEO:
      return {
        ...state,
        playerState: PLAYER_STATE.BUFFERING,
      }
    case ACTIONS.PLAY_VIDEO:
      return {
        ...state,
        playerState: PLAYER_STATE.PLAYING,
      }

    case ACTIONS.PAUSE_VIDEO:
      return {
        ...state,
        playerState: PLAYER_STATE.PAUSED,
      }

    case ACTIONS.ENDED_VIDEO:
      return {
        ...state,
        playerState: PLAYER_STATE.ENDED,
      }

    case ACTIONS.HIDDE_CONTROLS:
      return {
        ...state,
        controls: false,
      }

    case ACTIONS.SHOW_CONTROLS:
      return {
        ...state,
        controls: true,
      }

    case ACTIONS.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      }

    case ACTIONS.SET_PLAYED_TIME:
      return {
        ...state,
        playedTime: action.payload,
      }

    case ACTIONS.RESET:
      return action.payload

    default:
      return state
  }
}

function Player({ id }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { playerState, duration, playedTime, controls } = state

  const { player } = useYoutube(id, onPlayerStateChange)

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.CUED) {
      dispatch({ type: ACTIONS.CUED_VIDEO })
    } else if (event.data == YT.PlayerState.BUFFERING) {
      dispatch({ type: ACTIONS.BUFFERING_VIDEO })
    } else if (event.data == YT.PlayerState.PLAYING) {
      dispatch({ type: ACTIONS.PLAY_VIDEO })
    } else if (event.data == YT.PlayerState.PAUSED) {
      dispatch({ type: ACTIONS.PAUSE_VIDEO })
    } else if (event.data == YT.PlayerState.ENDED) {
      dispatch({ type: ACTIONS.ENDED_VIDEO })
    }
  }

  useEffect(() => {
    dispatch({ type: ACTIONS.RESET, payload: initialState })
  }, [id])

  useEffect(() => {
    if (player) {
      dispatch({
        type: ACTIONS.SET_DURATION,
        payload: player.getDuration(),
      })

      const interval = setInterval(() => {
        dispatch({
          type: ACTIONS.SET_PLAYED_TIME,
          payload: player.getCurrentTime(),
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [player])

  const handlePlay = () => player.playVideo()

  const handlePause = () => player.pauseVideo()

  const handleRewing = () => player.seekTo(player.getCurrentTime() - 10)

  const handleGoFoward = () => player.seekTo(player.getCurrentTime() + 10)

  const handleOnBeforeSliderChange = () => player.pauseVideo()

  const handleOnAfterSliderChange = (value) => {
    player.seekTo(value, true)
    player.playVideo()
  }

  const handleShowControls = () => dispatch({ type: ACTIONS.SHOW_CONTROLS })

  const handleHiddeControls = () => dispatch({ type: ACTIONS.HIDDE_CONTROLS })

  return (
    <>
      <div className="player-container bg-black">
        <div id="player" className="player"></div>

        {playerState != PLAYER_STATE.UNSTARTED &&
          playerState != PLAYER_STATE.ENDED && (
            <div className="overlay" onClick={handleShowControls}></div>
          )}

        {player && (
          <PlayerControls
            playerState={playerState}
            duration={duration}
            playedTime={playedTime}
            controls={controls}
            handlePlay={handlePlay}
            handlePause={handlePause}
            handleHiddeControls={handleHiddeControls}
            handleRewing={handleRewing}
            handleGoFoward={handleGoFoward}
            handleOnBeforeSliderChange={handleOnBeforeSliderChange}
            handleOnAfterSliderChange={handleOnAfterSliderChange}
          />
        )}
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default Player
