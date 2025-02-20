import { useState } from "react";

export default function HomePage(){
    return <div className="w-full h-full min-w-full min-h-full overflow-scroll relative">
        <Drawer/>
        <Sheet/>
    </div>
}

function Drawer(){
    return <div className="w-96 h-full bg-violet-600 mm8 hover:translate-x-0 duration-500 absolute left-0 z-10"></div>;
}

function Sheet(){
    return <div className="grid-col w-full h-full grid-flow-row grid">
        <div>hi thilak</div>
        <div>hi thilak</div>
        <div>hi thilak</div>
        <div>hi thilak</div>
    </div>
}