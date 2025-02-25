import Tooltip from '@/components/ui/Tooltip';
import { Mic } from 'lucide-react';

const Composer = () => {
    return (
        <div className="absolute bottom-3 left-0 right-0 bg-white md:w-2/3 w-[calc(100%-20px)] mx-auto rounded-full">
            <div className="flex items-center justify-between">
                <input
                    className="!w-full !border-none !outline-none !ring-0 !shadow-none !bg-transparent !text-gray-700 !placeholder:text-gray-500 py-3 px-4 !rounded-full mr-7 font-roboto text-sm md:text-base"
                    placeholder="What would you like to book?"
                />
                {/* <Search className="absolute left-3 text-gray-500 h-5 w-5 md:h-7 md:w-7" strokeWidth={1.5} /> */}
                <Tooltip title="Search with voice">
                    <Mic
                        className="absolute right-1.5 -top-5 cursor-pointer text-gray-500 h-5 w-5 md:h-10 md:w-10 hover:bg-gray-100 rounded-full p-2"
                        strokeWidth={1.5}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default Composer;
