import { Global, css } from "@emotion/react"

const Fonts = () => (
    //TODO:global styles の適用方法わからない
    <Global
    styles={`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    `}
  />
)

export default Fonts