import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  name: string;
  description: string;
  stars: number;
  link: string;
  language: string;
  languageColor: string;
}

const Project: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.get('https://be-devfolio.vercel.app/api/pinned-repos');
        setRepos(response.data);
      } catch (err) {
        setError('Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return (
    <section id="projects" className="container mx-auto p-6 mb-[16vh]">
      <div className="flex justify-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-custom-green to-custom-gray 
                      text-center bg-clip-text text-transparent">
          What Have I Done?
        </p>
      </div>
      <h2 className="mb-[10vh] text-6xl font-bold text-blue-500 text-center">Projects</h2>
      
      {loading && <p className="text-center text-lg text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-6 shadow-lg transform transition-all hover:scale-105 hover:bg-purple-600 
                         relative rounded-lg hover:shadow-md"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold">{repo.name}</h3>
                <p className="text-gray-400">{repo.description}</p>
                
                <div className="flex items-center mt-4">
                  <span
                    className="w-5 h-5 rounded-full mr-3"
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <p className="text-sm">{repo.language}</p>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg text-white hover:text-custom-dark">{repo.stars} ⭐</span>
                  <span className="bg-clip-text bg-gradient-to-r from-custom-green to-custom-gray text-transparent 
                                  hover:underline text-white">
                    View on GitHub
                  </span>
                </div>
              </div>
            </a>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No repositories available</p>
        )}
      </div>
    </section>
  );
};

export default Project;
