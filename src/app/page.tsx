import Counter from "@/components/Counter"
import os from "os"

export default function Home() {
  console.log("안녕!")
  console.log(os.hostname())

  return (
    <>
      <h1>메인 페이지인데용?</h1>
      <Counter />
    </>
  )
}
