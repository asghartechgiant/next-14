const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section: Navigation and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">About Us</h2>
            <p className="text-sm mt-4 text-gray-400">
              Your go-to blog for the latest insights in design, technology, and
              creativity. Stay inspired and informed with our curated content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <p className="text-sm mt-4 text-gray-400">
              Connect with us on social media for more updates.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.847 3c-2.73 0-4.944 2.214-4.944 4.943 0 .388.044.764.127 1.125C7.728 8.847 4.1 6.884 1.671 3.88a4.919 4.919 0 0 0-.668 2.483c0 1.713.87 3.226 2.188 4.112a4.904 4.904 0 0 1-2.238-.618v.061c0 2.396 1.704 4.391 3.961 4.844a4.902 4.902 0 0 1-2.224.085c.626 1.953 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 20.196a13.936 13.936 0 0 0 7.548 2.212c9.054 0 14.004-7.504 14.004-14.004 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 0C8.741 0 8.332.013 7.053.071 5.771.13 4.926.304 4.183.617c-.757.317-1.43.739-2.098 1.406C1.184 2.69.763 3.364.445 4.121.132 4.866-.04 5.711-.099 6.993.012 8.267 0 8.683 0 12c0 3.317.013 3.732.071 5.053.059 1.282.231 2.127.616 2.87.317.757.739 1.43 1.406 2.098.668.667 1.341 1.089 2.098 1.406.742.385 1.587.558 2.869.616 1.32.059 1.736.071 5.053.071s3.732-.013 5.053-.071c1.282-.059 2.127-.231 2.87-.616.757-.317 1.43-.739 2.098-1.406.667-.668 1.089-1.341 1.406-2.098.385-.742.558-1.587.616-2.869.059-1.32.071-1.736.071-5.053s-.013-3.732-.071-5.053c-.059-1.282-.231-2.127-.616-2.87-.317-.757-.739-1.43-1.406-2.098-.668-.667-1.341-1.089-2.098-1.406-.742-.385-1.587-.558-2.869-.616C15.732.013 15.317 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.182a4.021 4.021 0 1 0 0-8.042 4.021 4.021 0 0 0 0 8.042zm7.406-10.846a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} The Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
