import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounce } from '../../../hooks/useDebounce';

const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedQuery.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        // Replace with your search API
        const response = await onSearch(debouncedQuery);
        setResults(response);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedQuery, onSearch]);

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border 
                   border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (query.length > 1 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-white rounded-lg shadow-xl 
                     border border-gray-200 max-h-96 overflow-y-auto z-50"
          >
            {loading ? (
              <div className="p-4 text-center text-gray-500">
                Searching...
              </div>
            ) : results.length > 0 ? (
              <ul>
                {results.map((result) => (
                  <SearchResult key={result.id} result={result} />
                ))}
              </ul>
            ) : query.length > 1 ? (
              <div className="p-4 text-center text-gray-500">
                No results found
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SearchResult = ({ result }) => (
  <li className="border-b border-gray-100 last:border-none">
    <button
      className="w-full px-4 py-3 text-left hover:bg-gray-50 
                 transition-colors flex items-center gap-3"
      onClick={() => {/* Handle result selection */}}
    >
      {result.icon && (
        <span className="text-gray-400">{result.icon}</span>
      )}
      <div>
        <h4 className="font-medium text-gray-900">{result.title}</h4>
        {result.description && (
          <p className="text-sm text-gray-500">{result.description}</p>
        )}
      </div>
    </button>
  </li>
); 