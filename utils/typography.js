import Typography from 'typography'

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
