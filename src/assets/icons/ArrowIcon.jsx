import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#272D38"
      d="M23.25 8.707a1 1 0 0 0 0-1.414L16.884.929a1 1 0 1 0-1.414 1.414L21.128 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.312 9h22.23V7H.312v2Z"
    />
  </svg>
)
export default SvgComponent
