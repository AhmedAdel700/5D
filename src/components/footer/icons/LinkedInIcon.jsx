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
      d="M36.192 1.005c-5.845-.016-27.401.011-32.384 0C2.258 1.005 1 2.225 1 3.727v32.552C1 37.782 2.258 39 3.808 39h32.384C37.742 39 39 37.782 39 36.279V3.727c0-1.502-1.257-2.722-2.808-2.722"
    />
    <path
      fill="#fff"
      d="M21.381 32.802V23.25c-.055-1.755.994-3.393 3.105-3.466 2.057 0 2.88 1.568 2.88 3.868v9.15h5.686v-9.808c0-5.254-2.805-7.699-6.546-7.699-3.067 0-4.414 1.714-5.163 2.882l.038-2.48h-5.685c.074 1.605 0 17.105 0 17.105zm-8.833-7.418v-9.688H6.862v17.106h5.686c0-1.796.002-5.647 0-7.418M9.706 13.362c1.982 0 3.217-1.314 3.217-2.955-.017-3.959-6.402-3.915-6.397 0-.004 1.653 1.264 2.975 3.18 2.955"
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
