import { Link, Router } from "react-router-dom";

export default function NavigationBar(){
    return(
        <div className=" flex will-change-auto h-12 text-2xl gap-7 justify-around bg-blue-200 items-center mb-8">
            <div> Move n pick</div>
             <div className="flex  justify-end gap-4">
                 <div> <Link to={'/'}>HOME</Link></div>
                 <div> <Link to={'/contact'}>CONTACT</Link></div>
                 <div> <Link to={'/about'}>ABOUT</Link></div>
             </div>
        </div>
    )
}