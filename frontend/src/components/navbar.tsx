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
            style={{ width: '50px', height: '50px' }}
          />
          <p className="font-medium text-lg text-gray-700">Alena</p>
          </div>
          <Button variant="primary" size="icon" icon={<RotateCw />} children/>
        </div>
    </React.Fragment>
  )
}

export default Navbar