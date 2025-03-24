const SkeletonCard = () => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-4 justify-center items-center h-screen">
            <div className="h-6 w-full bg-gray-300 rounded-full mb-2"></div>
            <div className="h-6 w-3/4 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-6 w-3/6 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-6 w-3/9 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-6 w-3/12 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-6 w-3/15 bg-gray-300 rounded-full mb-2"></div>
        </div>
    );
};

export default SkeletonCard;