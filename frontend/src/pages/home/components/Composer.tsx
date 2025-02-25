
import { Search } from "lucide-react"

const Composer = () => {
  return (
    <div className="absolute bottom-3 left-0 right-0 bg-white w-2/3 mx-auto rounded-full">
        <div className="flex items-center justify-between relative">
               <input className="!w-full !border-none !outline-none !ring-0 !shadow-none !bg-transparent !text-gray-700 !placeholder:text-gray-500 py-3 px-4 !rounded-full ml-7 font-roboto" placeholder="What would you like to book?"/>
               <Search className="absolute left-3 text-gray-500" strokeWidth={1.5} />
        </div>
    </div>
  )
}

export default Composer