export default function Button(props: { icon?: JSX.Element; text: string, className?: string }) {
  const { icon, text, className } = props

  return (
    <button className={`w-32 h-9 rounded-sm border border-blue-600 flex items-center justify-center gap-2 ${className}`}>
      {icon}
      <p className="text-[14px] font-medium text-blue-600 uppercase tracking-wide">{text}</p>
    </button>
  )
}
