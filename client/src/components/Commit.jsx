import React from 'react';

const formatDate = dateString => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Commit = ({ commit, commitNumber }) => {
    console.log('Commit data:', commit);
    return (
        <div key={commit.sha} className="p-4 border rounded-lg shadow-md mb-4">
            <strong className="block text-black text-lg mb-2">Commit #{commitNumber}</strong>
            <a
                href={`https://github.com/RonkiETH/full-time-force_test/commit/${commit.sha}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
            >
                {commit.commit.message}
            </a>
            <br />
            <p className="text-gray-600 inline text-sm">Fecha y hora: {formatDate(commit.commit.author.date)}</p> 
        </div>
    );
};

export default Commit;

