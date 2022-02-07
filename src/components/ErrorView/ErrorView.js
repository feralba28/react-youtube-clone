import Image from 'next/image'

function ErrorView() {
  const errorTitle = 'Ocurrió un error'
  const errorSubTitle = 'Vuelve a intentarlo más tarde.'
  
  return (
    <>
      <div className="d-flex fd-col ai-center p-5">
        <Image src="/images/warning.png" width={48} height={48} />
        <p className="fs-16 color-dark fw-500 pt-1">{errorTitle}</p>
        <p className="fs-14 pt-2">{errorSubTitle}</p>
      </div>
    </>
  )
}

export default ErrorView
