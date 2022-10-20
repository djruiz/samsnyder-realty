import { Component } from "types/component";
import FortWayneImage from "assets/fort-wayne.png";

export const Headline: Component = ({ children }) => {
    return (
        <div className='w-100' style={{ background: `linear-gradient(90deg, #0024A150, #00000000, #FFA48750), url("${FortWayneImage.src}")`, backgroundSize: "cover" }}>
            <div className='container mw-1100'>
                <div className='row'>
                    {children}
                </div>
            </div>
        </div>
    )
}