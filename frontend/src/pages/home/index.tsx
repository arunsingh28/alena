import { Popcorn, Plane, Ticket } from 'lucide-react';
import Card from './components/Card';
import Composer from './components/Composer';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center relative max-w-screen-lg h-screen mx-auto">
            <div className="flex flex-col gap-4 px-4 md:px-0">
                <h1 className="text-4xl font-bold text-clip bg-gradient-to-r from-blue-900 to-green-700 text-transparent bg-clip-text">
                    Hi there, Arun <br /> What would you like to book today?
                </h1>
                <p className="text-gray-500 text-sm">
                    Use one of the most common prompt <br /> below to use your
                    own to begin
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4 md:items-start">
            {[
                {
                    description: 'Book the cheapest movie tickets for a movie.',
                    icon: <Popcorn className='text-green-500' strokeWidth={1.5}/>,
                },
                {
                    description: 'Book the cheapest Event tickets.',
                    icon: <Ticket className='text-orange-500' strokeWidth={1.5}/>,
                },
                {
                    description: 'Book the cheapest flight for a city.',
                    icon: <Plane className='text-blue-500' strokeWidth={1.5}/>,
                },
            ].map((crd, index) => {
                return (
                    <Card
                        key={index}
                        description={crd.description}
                        icon={crd.icon}
                    />
                );
            })}
            </div>
            <Composer />
        </div>
    );
}

export default Home;
