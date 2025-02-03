// eslint-disable-next-line react/prop-types
const Progress = ({ value, className = "" }) => {
  return (
    <div className={`relative w-full h-4 bg-gray-200 rounded-xl overflow-hidden ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
