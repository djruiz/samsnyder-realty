import { FiveStars } from "./five-stars"
import { Fullshot } from "./fullshot"
import { Quotes } from "./quotes"
import content from "assets/content"

export const SamSnyder = () => {
  return (
    <div className="pb-5">
      <div className='text-center'>
        <h1 className="text-primary m-0">Sam Snyder</h1>
        <div className="w-100 my-2 d-flex justify-content-center">
          <FiveStars />
        </div>
        <Quotes quotes={content.googleReviews.quotes} />
      </div>
      <Fullshot />
    </div>
  )
}