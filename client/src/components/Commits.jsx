import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Commit from './Commit';

const Commits = () => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await axios.get('http://localhost:3001/commits');
                console.log('API response:', response.data);

                const totalCommits = response.data.commits.length;

                const commitsWithNumbers = response.data.commits.map((commit, index) => ({
                    ...commit,
                    commitNumber: totalCommits - index
                }));

                setCommits(commitsWithNumbers);
            } catch (error) {
                console.error('Error fetching commits:', error.message);
            }
        };

        fetchCommits();
    }, []);

    return (
        <div className="w-1/2 mx-auto">
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Historial de Commits</h1>
            {commits.length > 0 ? (
                <div>
                    {commits.map(commit => (
                        <Commit key={commit.sha} commit={commit} commitNumber={commit.commitNumber} />
                    ))}
                </div>
            ) : (
                <p>No hay commits disponibles.</p>
            )}
        </div>
    );
};

export default Commits;

