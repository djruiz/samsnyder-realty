import { Component } from "types/component";
import { GoogleReview } from "./google-review";
import Caitlyn from "../assets/google-users/caitlyn.png";
import Juan from "../assets/google-users/juan.png";
import Linsey from "../assets/google-users/lindsey.png";

export const GoogleReviews: Component = () => {
  return (
    <div className="pb-4">
      <GoogleReview
        profilePic={Juan}
        name="Juan B."
        date="November 2022"
        review="Sam is a great realtor! He is very knowledgeable, responsive, and patient. He would always point out potential issues with homes and flag any big ticket items. If you want a realtor that has his client's best interests in mind, go with Sam!"
      />
      <GoogleReview
        profilePic={Juan}
        name="Lindsey Neag"
        date="November 2022"
        review="Sam is great! He was super accommodating to us as we needed to buy a home quickly and were constantly traveling back and forth from Ohio. He always made us feel welcome and was honest throughout the whole buying process."
      />
      <GoogleReview
        profilePic={Caitlyn}
        name="Caitlnn Strobel"
        date="February 2022"
        review="Sam is a very knowledgeable realtor! My husband and I were very thankful for all of Sam’s help when buying our first home. Sam was always patient with us and quick to respond to our questions. 10/10 would recommend!"
      />
    </div>
  );
};
