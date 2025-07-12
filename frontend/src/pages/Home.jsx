import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import './Home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3; // As shown in your design

  // Mock data - replace with API call in real implementation
  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: 'Marc Demo',
        profilePhoto: '/marc.jpg',
        skillsOffered: ['Game Design', 'Photoshop'],
        skillsWanted: ['JavaScript', 'React'],
        rating: 3.4
      },
      {
        id: 2,
        name: 'Michelle',
        profilePhoto: '/michelle.jpg',
        skillsOffered: ['JavaScript', 'React'],
        skillsWanted: ['Game Design', 'Photoshop'],
        rating: 2.8
      },
      {
        id: 3,
        name: 'Joe Wills',
        profilePhoto: '/joe.jpg',
        skillsOffered: ['Python', 'Data Analysis'],
        skillsWanted: ['UI/UX Design'],
        rating: 4.0
      }
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user => 
    user.skillsOffered.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    user.skillsWanted.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="home-container">
      <h1>Skill Swap Platform</h1>
      
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <div className="users-grid">
        {currentUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;