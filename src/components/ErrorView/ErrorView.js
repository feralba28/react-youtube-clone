import Image from 'next/image'

function ErrorView() {
  const errorTitle = 'Ocurrió un error'
  const errorSubTitle = 'Vuelve a intentarlo más tarde.'
  
  return (
    <>
      <div className="flex flex-col items-center pt-8">
        <Image src="/images/warning.png" width={48} height={48} />
        <p className="text-gray-800 font-medium pt-1.5">{errorTitle}</p>
        <p className="text-sm pt-3">{errorSubTitle}</p>
      </div>
    </>
  )
}

export default ErrorView
