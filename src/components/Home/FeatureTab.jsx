// FeatureTab.jsx
const FeatureTab = ({ icon, title, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center px-4 py-3 rounded-lg transition-all ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 mb-2 ">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <p className="text-sm font-medium">{title}</p>
    </button>
  );
};

export default FeatureTab;