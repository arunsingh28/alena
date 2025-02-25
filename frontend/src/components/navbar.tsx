import React from "react"
import Lottie from "react-lottie-player"

import animationData from '@/assets/lottie/ai.json'

import Button from "@/components/ui/Button"
import { Plus } from "lucide-react"

const Navbar = () => {
  return (
    <React.Fragment>
        <div className="border-r-2 px-2 flex flex-col items-center gap-3 w-20">
          <Lottie
            animationData={animationData}
            loop
            play
            style={{ width: '50px', height: '50px' }}
          />
          <Button variant="primary" size="icon" icon={<Plus />} children/>
        </div>
    </React.Fragment>
  )
}

export default Navbar