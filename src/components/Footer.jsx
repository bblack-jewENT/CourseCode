const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 CodeLearn. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
