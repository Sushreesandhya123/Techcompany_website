import RequestDemoButton from '../RequestDemoButton'; // Adjust path as necessary

const CallToActions = () => {
  const handleDemoClick = () => {
    // Your demo click logic here
    console.log("Demo button clicked");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <RequestDemoButton onClick={handleDemoClick} />
      <a href="#" className="flex items-center text-blue-600 font-medium hover:underline">
        See all features
        <svg className="w-4 h-4 ml-2" viewBox="0 0 16 16" fill="none">
          <path d="M10 13L15 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <line x1="14" y1="8" x2="0" y2="8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </div>
  );
};

export default CallToActions;
