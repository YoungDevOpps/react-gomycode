// Logo : un "I" dans un carré turquoise + le texte "Ibrahim Shop"
function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 transition-transform hover:scale-105">
      <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#2DD4BF" />
        <rect x="17" y="10" width="6" height="20" fill="#0F172A" />
        <rect x="12" y="10" width="16" height="4" fill="#0F172A" />
        <rect x="12" y="26" width="16" height="4" fill="#0F172A" />
      </svg>
      <span className="flex flex-col leading-none text-white">
        <strong className="text-lg font-extrabold">Ibrahim</strong>
        <small className="text-[0.7rem] font-semibold tracking-[0.4em] text-primary">SHOP</small>
      </span>
    </span>
  )
}

export default Logo
