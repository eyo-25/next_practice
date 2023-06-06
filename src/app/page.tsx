import Counter from "@/components/Counter"
import os from "os"
import Image from "next/image"

// 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
export default function Home() {
  console.log("안녕! - 서버")
  console.log(os.hostname())
  return (
    <>
      <h1>메인 페이지인데용?</h1>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
      <Counter />
    </>
  )
}
