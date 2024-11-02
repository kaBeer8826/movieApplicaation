import axios from "axios"; // Importing axios for making HTTP requests
import React, { useEffect, useState } from "react"; // Importing React and its hooks
import { useLocation, useNavigate } from "react-router-dom"; // Importing useLocation and useNavigate from react-router-dom for location and navigation
import Card from "../components/Card"; // Importing Card component for displaying search results

function SearchPage() {
  const location = useLocation(); // Using useLocation to get the current location
  const [data, setData] = useState([]); // State to hold the search data
  const [page, setPage] = useState(1); // State to hold the current page number
  const navigate = useNavigate(); // Using useNavigate for navigation
  const query = location?.search?.slice(3); // Extracting the query from the URL

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3), // Passing the query to the API
          page: page, // Passing the current page number to the API
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results]; // Updating the data state with new results
      });
    } catch (error) {
      console.log("error", error); // Logging any errors that occur
    }
  };

  // Effect to run when the location changes (i.e., when the query changes)
  useEffect(() => {
    if (query) {
      setPage(1); // Resetting the page number when the query changes
      setData([]); // Resetting the data state when the query changes
      fetchData(); // Fetching data with the new query
    }
  }, [location?.search]);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1); // Incrementing the page number when the user scrolls to the bottom
    }
  };

  // Effect to run when the page number changes
  useEffect(() => {
    if (query) {
      fetchData(); // Fetching data with the new page number
    }
  }, [page]);

  // Effect to add a scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)} // Navigating to a new search query when the input changes
          value={query?.split("%20")?.join(" ")} // Displaying the query in the input field
          className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 "
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search"} // Using a unique key for each Card component
                media_type={searchData.media_type} // Passing the media type to the Card component
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
