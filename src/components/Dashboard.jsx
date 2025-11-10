import { useState, useEffect } from "react";

const Dashboard = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = JSON.parse(
      localStorage.getItem("codelearn-progress") || "{}"
    );
    setProgress(savedProgress);
  }, []);

  const courses = [
    { id: 1, title: "HTML Basics", lessons: 3 },
    { id: 2, title: "CSS Styling", lessons: 3 },
    { id: 3, title: "JavaScript Fundamentals", lessons: 3 },
    { id: 4, title: "React Components", lessons: 3 },
  ];

  const getCourseProgress = (courseId) => {
    const courseLessons = courses.find((c) => c.id === courseId)?.lessons || 0;
    const completedQuizzes = Object.keys(progress).filter((key) =>
      key.startsWith(`quiz-${courseId}-`)
    ).length;
    return Math.round((completedQuizzes / courseLessons) * 100);
  };

  const totalProgress =
    courses.reduce((acc, course) => acc + getCourseProgress(course.id), 0) /
    courses.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Learning Dashboard</h1>

      {/* Overall Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overall Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">
          {Math.round(totalProgress)}% Complete
        </p>
      </div>

      {/* Course Progress */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => {
          const courseProgress = getCourseProgress(course.id);
          return (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${courseProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {courseProgress}% Complete
              </p>

              {/* Quiz Scores */}
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Quiz Scores:</h4>
                {Object.entries(progress)
                  .filter(([key]) => key.startsWith(`quiz-${course.id}-`))
                  .map(([key, value]) => (
                    <div key={key} className="text-sm text-gray-600">
                      Lesson {key.split("-")[2]}: {value.score}/{value.total}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
