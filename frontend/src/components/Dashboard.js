import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Bar */}
            <div className="bg-white px-6 py-4 shadow-sm flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Welcome back, User Name!</span>
                    <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="User"/>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-blue-100 p-5 border-r">
                    <h2 className="text-lg font-semibold text-gray-700 mb-5">Navigation</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-blue-700 hover:text-blue-800">Home</a></li>
                        <li><a href="#" className="text-blue-700 hover:text-blue-800">Tutorials</a></li>
                        <li><a href="#" className="text-blue-700 hover:text-blue-800">Exercises</a></li>
                        <li><a href="#" className="text-blue-700 hover:text-blue-800">Quizzes</a></li>
                        <li><a href="#" className="text-blue-700 hover:text-blue-800">Community</a></li>
                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-5">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Recommended Learning Content */}
                        <div className="bg-white p-4 shadow rounded col-span-2">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Learning Content</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded flex items-center justify-center">Tutorial 1</div>
                                <div className="bg-blue-50 p-4 rounded flex items-center justify-center">Tutorial 2</div>
                                <div className="bg-blue-50 p-4 rounded flex items-center justify-center">Tutorial 3</div>
                                <div className="bg-blue-50 p-4 rounded flex items-center justify-center">Tutorial 4</div>
                            </div>
                        </div>

                        {/* Upcoming Review Tasks */}
                        <div className="bg-white p-4 shadow rounded">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Upcoming Review Tasks</h3>
                            <ul className="text-gray-600">
                                <li>Topic A - Next Review: In 3 Days</li>
                                <li>Topic B - Next Review: In 1 Week</li>
                                <li>Topic C - Next Review: Today</li>
                            </ul>
                        </div>

                        {/* Learning Progress */}
                        <div className="bg-white p-4 shadow rounded col-span-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Learning Progress</h3>
                            <div className="w-full bg-blue-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                        </div>

                        {/* Quick Actions & Community Posts */}
                        <div className="col-span-3 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 shadow rounded">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h3>
                                <ul className="text-blue-700 hover:text-blue-800">
                                    <li><a href="#">Start New Exercise</a></li>
                                    <li><a href="#">Take Quiz</a></li>
                                    <li><a href="#">View Review History</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 shadow rounded">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">New Community Post</h3>
                                <ul className="text-blue-700 hover:text-blue-800">
                                    <li><a href="#">How to upload my answer?</a></li>
                                    <li><a href="#">Questions about python list</a></li>
                                    <li><a href="#">Tips for exercises</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
