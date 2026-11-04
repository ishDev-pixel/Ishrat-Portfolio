const Jenkins = (props) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    {/* Butler's Hat */}
    <path d="M16 17 L20 5 H44 L48 17 Z" />

    {/* Face */}
    <path d="M14 19 Q14 12 32 12 Q50 12 50 19 L46 43 Q44 54 32 54 Q20 54 18 43 Z" />

    {/* Bow Tie */}
    <path d="M21 48 L31 43 L32 49 L33 43 L43 48 L32 57 Z" />

    {/* Eyes */}
    <circle cx="25" cy="29" r="2.5" fill="white" />
    <circle cx="39" cy="29" r="2.5" fill="white" />

    {/* Mustache */}
    <path d="M32 36 Q25 30 21 36 Q25 44 32 39 Q39 44 43 36 Q39 30 32 36Z" fill="white" />
  </svg>
);

export default Jenkins;