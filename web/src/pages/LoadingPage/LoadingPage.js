import { MetaTags } from '@redwoodjs/web'
import '../../styles/LoadingStyle.css'
const LoadingPage = () => {
  return (
    <>
      <MetaTags
        title="Loading"
        description="by hiyo"
        author="hiyo"
        keywords="hiyo"
      />

      <div className="main">
        <span className="word" id="l">
          L
        </span>
        <span className="word" id="o">
          O
        </span>
        <span className="word" id="a">
          A
        </span>
        <span className="word" id="d">
          D
        </span>
        <span className="word" id="i">
          I
        </span>
        <span className="word" id="n">
          N
        </span>
        <span className="word" id="g">
          G
        </span>
      </div>
    </>
  )
}

export default LoadingPage
