import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="300" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="336" rx="0" ry="0" width="280" height="84" />
    <rect x="2" y="429" rx="0" ry="0" width="62" height="27" />
    <rect x="133" y="427" rx="17" ry="17" width="152" height="30" />
  </ContentLoader>
)

export default Skeleton