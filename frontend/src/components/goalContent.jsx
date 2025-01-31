import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { goalDetails } from '../goalDetail';
import Footer from './Footer';

const GoalContent = () => {
  const { id } = useParams();
  const goal = goalDetails[id];

  if (!goal) return <div className="text-center text-red-500 font-bold text-lg">Goal not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header /><br/><br/><br/><br/>
      
      <div className="container mx-auto px-6 py-12">
        
        {/* Goal Header */}
        <div 
          className="rounded-lg shadow-lg p-6 mb-6 flex items-center bg-pink"
          style={{ background: `${goal.color}`, }}
        >
          <img src={goal.icon} alt={goal.title} className="text-white h-12 w-12 object-contain mr-4" />
          <h2 className="text-2xl font-bold text-white">{goal.title}</h2>
          <button className="w-full md:w-auto bg-yellow-500 text-white rounded-md px-4 ml-210 py-2 hover:bg-[#228B6C] transition-colors duration-300">
                        Start Quiz
                    </button>
        </div>

        {/* Main Content */}
        <div className="bg-white text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
          
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img 
              src={goal.image} 
              alt={goal.title} 
              className="text-white w-[400px] h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Overview & Key Points Section */}
          <div className="flex-1">
            {/* Overview */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <p className="text-gray-700">{goal.overview}</p>
            </div>

            {/* Key Points */}
            <div>
              <h2 className="text-xl font-bold mb-3">Key Points</h2>
              <ul className="list-disc pl-6 space-y-2">
                {goal.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

{/* Videos Section */}
<div className="bg-white rounded-lg shadow-lg p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">Related Videos</h2>
  
  <div className="grid grid-cols-2 gap-4">
    {/* Left Video (First iframe) */}
    <div className="p-2 border rounded">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${goal.videos}`}
        title="SDG 1: No Poverty"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Right Video (Second iframe) */}
    <div className="p-2 border rounded flex justify-end">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${goal.videos2}`}
        title="SDG 1: No Poverty"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

   



        {/* Resources Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 gap-3">
            {goal.resources.map((resource, index) => (
              <a key={index} 
                 href={resource.url} 
                 className="text-blue-600 hover:underline"
                 target="_blank" 
                 rel="">
                {resource.title}
              </a>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default GoalContent;
