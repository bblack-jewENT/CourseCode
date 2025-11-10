import { Link } from "react-router-dom";

const LessonCard = ({ lesson, courseId }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50">
      <h3 className="font-semibold mb-2">{lesson.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{lesson.content}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/lesson/${courseId}/${lesson.id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          Read Lesson
        </Link>
        <Link
          to={`/quiz/${courseId}/${lesson.id}`}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
