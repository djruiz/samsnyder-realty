import { Component } from "types/component";
import FortWayneImage from "assets/fort-wayne.png";

export const Headline: Component = ({ children }) => {
    return (
        <div className='w-100' style={{ background: `linear-gradient(90deg, #0024A150, #00000000, #FFA48750), url("${FortWayneImage.src}")`, backgroundSize: "cover", boxShadow: "inset 0 0 15px 5px #00000050" }}>
            <div className='container mw-1100'>
                <div className='row'>
                    {children}
                </div>
            </div>
        </div>
    )
}