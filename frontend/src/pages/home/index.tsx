import { Hotel, Plane } from 'lucide-react';
import Card from './components/Card';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-clip bg-gradient-to-r from-blue-900 to-green-700 text-transparent bg-clip-text">
                    Hi there, Arun <br /> What would you like to book today?
                </h1>
                <p className="text-gray-500">
                    Use one of the most common prompt <br /> below to use your
                    own to begin
                </p>
            </div>
            <div className="flex gap-4 py-4 items-start">
            {[
                {
                    description: 'Book the cheapest movie tickets for a movie',
                    icon: <Plane />,
                },
                {
                    description: 'Book the cheapest hotel for a city',
                    icon: <Hotel />,
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
        </div>
    );
}

export default Home;
