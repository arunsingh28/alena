import React from "react"
import Lottie from "react-lottie-player"
import { RotateCw } from "lucide-react"
import Button from "@/components/ui/Button"
import animationData from '@/assets/lottie/ai.json'


const Navbar = () => {
  return (
    <React.Fragment>
        <div className="fixed top-1 left-0 flex items-center justify-between w-full px-4 gap-2">
          <div className="flex items-center gap-2 hover:bg-blue-200/60 px-1 pr-3 py-1 rounded-full">
          <Lottie
            animationData={animationData}
            loop
            play
            className="md:w-10 md:h-10 w-8 h-8"
          />
          <p className="font-medium md:text-lg text-sm text-gray-700">Alena</p>
          </div>
          <Button variant="primary" size="icon" className="md:w-10 md:h-10 w-8 h-8" icon={<RotateCw className="md:w-5 md:h-5 w-4 h-4"/>} children={<p className="md:text-sm text-xs">Refresh</p>}/>
        </div>
    </React.Fragment>
  )
}

export default Navbar