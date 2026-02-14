import Hello from "./Hello"
import Hi from "./Hi"
import Sqr from "./Sqr"

function App() {
  return (
    <>
      <Sqr num={5}/>
      <Sqr num={6} />
      <Sqr num={7} />
      <Hi />
      <Hello />
      Hello World
    </>
  )
}

export default App
