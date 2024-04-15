import { FunctionComponent } from "react";

const Section: FunctionComponent = () => {
  return (
    <footer className="bg-gray-200 flex flex-col md:flex-row items-start justify-between px-5 py-6 gap-5 max-w-full text-sm text-darkgray font-poppins">
      <div className="flex flex-col items-start justify-start gap-3">
        <p className="leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="font-medium">Useful Links</div>
        <div className="flex flex-col items-start justify-start gap-2">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Contact us</a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="font-medium">Our Vision</div>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="leading-6">The Pros and Cons of Starting an Online Business.</p>
          <p className="text-xs">12th June 2017</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="font-medium">Our Newsletter</div>
        <p className="leading-5">Subscribe to our newsletter to get the latest News and offers.</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="font-medium">More Articles</div>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="leading-6">The Pros and Cons of Starting an Online Business.</p>
          <p className="text-xs">12th June 2017</p>
        </div>
      </div>
      <button className="h-12 w-12 bg-green-700 text-white text-sm font-medium rounded-full hover:bg-green-600">Go</button>
    </footer>
  );
};

export default Section;
