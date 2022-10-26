import { FiveStars } from "./five-stars"
import { Fullshot } from "./fullshot"
import { Quotes } from "./quotes"

export const SamSnyder = () => {
  return (
    <div className="pb-5">
      <div className='text-center'>
        <h1 className="text-primary m-0">Sam Snyder</h1>
        <FiveStars />
        <Quotes quotes={["Knowledgable", "Patient", "Responsive"]} />
      </div>
      <Fullshot />
    </div>
  )
}