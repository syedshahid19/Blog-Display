import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(10); // Number of visible posts initially
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData();
      setPosts(data);
      setFilteredPosts(data); // Initially, show all posts
    };
    getPosts();
  }, []);

  const handleSearch = () => {
    const results = posts.filter(post =>
      post.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
    setVisiblePosts(10); // Reset visible posts when searching
  };

  const handleShowMore = () => {
    setVisiblePosts(prev => prev + 10); // Increase number of visible posts
  };

  return (
    <div className='flex flex-col items-center mx-6 md:mx-0 lg:mx-0'>
      <div className="w-[100%] mb-6 flex lg:flex-row flex-col items-center justify-evenly">
        <p className="text-5xl font-semibold mb-8 lg:mb-0 md:mb-8">Recent Posts</p>
        <div className="flex mb-4 sm:w-full  lg:w-[30%] md:w-[70%] h-16 lg:mx-0 md:mx-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white rounded px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* Check if there are filtered posts */}
      {filteredPosts.length === 0 ? (
        <p className="text-xl font-semibold text-gray-500 mt-10">
          Post not found
        </p>
      ) : (
        <div className="w-full md:w-9/12 lg:w-9/12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <div key={post.id} className="border border-richblack-25 flex flex-col items-center p-4 hover:border-black transition-all duration-200 ease-in">
              <div className='flex flex-col border-b border-b-richblack-50 mb-4'>
                <p className="text-xl font-bold mb-2">{post.heading}</p>
                <p className="text-md mb-4">{post.preview}</p>
              </div>
              <div className='flex items-center gap-4'>
                <img src={post.author_pic} alt='Author' className="w-16 h-16 rounded-full border" />
                <p className="text-md font-semibold">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredPosts.length > visiblePosts && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-black text-white font-bold py-3 lg:py-5 px-6 lg:px-10 rounded-lg hover:bg-violet-500 transition-all duration-300 ease-out"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default RecentPosts;
