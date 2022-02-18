import { useEffect, useState } from 'react'

function useYoutube(id, onPlayerStateChange) {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (player) {
      player.destroy()
      setPlayer(null)
    }

    if (!window.YT) {
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      tag.onload = setupPlayer
    } else {
      setupPlayer()
    }
  }, [id])

  function setupPlayer() {
    window.YT.ready(function () {
      new window.YT.Player('player', {
        width: '100%',
        videoId: id,
        playerVars: {
          autoplay: 1,
          autohide: 1,
          controls: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    })
  }

  function onPlayerReady(event) {
    setPlayer(event.target)
  }

  return { player }
}

export default useYoutube
