import React from 'react';

const formatDate = dateString => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Commit = ({ commit }) => {
    console.log('Commit data:', commit);
    return (
        <li key={commit.sha}>
        <strong>Commit: </strong>
        <a
            href={`https://github.com/RonkiETH/full-time-force_test/commit/${commit.sha}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {commit.commit.message}
        </a>
        <br />
        <strong>Fecha y hora: </strong>
        {formatDate(commit.commit.author.date)}
        </li>
    );
};

export default Commit;

