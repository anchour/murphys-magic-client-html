export default function CopyComponent({ onClick, children = 'Copy code' }) {
  return (
    <button type='button' onClick={onClick} className='rounded text-xs uppercase tracking-wider leading-none bg-slate-800 px-4 py-2 text-white font-bold absolute -top-4 -right-4 opacity-0 transform scale-95 transition-all group-hover:opacity-100 group-hover:scale-100 border-2 border-smoke hover:bg-water hover:text-white'>{children}</button>
  )
}