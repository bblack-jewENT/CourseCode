import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to CodeLearn</h1>
          <p className="text-xl mb-8">
            Learn web development basics through interactive tutorials and
            quizzes
          </p>
          <Link
            to="/courses"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Start Learning Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About CodeLearn
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            CodeLearn is your gateway to mastering web development. We offer
            beginner-friendly courses in HTML, CSS, JavaScript, and React,
            complete with interactive lessons and quizzes to track your
            progress.
          </p>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">HTML Basics</h3>
              <p>Learn the foundation of web pages</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">CSS Styling</h3>
              <p>Make your websites beautiful</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">
                JavaScript Fundamentals
              </h3>
              <p>Add interactivity to your sites</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">React Components</h3>
              <p>Build modern web applications</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <p className="text-lg mb-8">
            Connect with fellow learners and get help when you need it
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Join Discord
            </a>
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
