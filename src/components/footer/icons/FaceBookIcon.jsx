const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M20 1c-23.557.69-25.96 33.745-2.984 38h5.968C45.964 34.741 43.552 1.688 20 1"
    />
    <path
      fill="#fff"
      d="M22.984 25.642h4.45l.847-5.526h-5.297V16.53c0-1.512.74-2.985 3.112-2.985h2.409V8.84c-5.158-.929-11.354-.646-11.489 7.064v4.212h-4.85v5.526h4.85V39h5.968z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={1}
        x2={39}
        y1={20}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B224EF" />
        <stop offset={1} stopColor="#7579FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Icon;
