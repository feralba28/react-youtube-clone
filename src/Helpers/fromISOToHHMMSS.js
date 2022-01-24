import { Duration } from 'luxon'

function fromISOToHHMMSS(isoDuration) {
  const { hours, minutes, seconds } = Duration.fromISO(isoDuration).toObject()

  const duration = `
    ${hours ? hours + ':' : ''}${
    minutes ? (minutes < 10 ? '0' + minutes : minutes + ':') : ''}${
    seconds ? (seconds < 10 ? '0' + seconds : seconds) : ''}
  `

  return duration
}

export default fromISOToHHMMSS