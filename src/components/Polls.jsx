import React from 'react';
import PollForm from './PollForm'; // ✅ make sure this is correct

const dummyPolls = [
  { id: 1, title: 'Best Snack?', options: ['Chips', 'Cookies', 'Fruit'] },
  { id: 2, title: 'Favorite IDE?', options: ['VS Code', 'WebStorm', 'Vim'] }
];

function PollsPage() {
  return (
    <div>
      {/* ✅ Add the poll creation form */}
      <PollForm />

      {/* ✅ Show existing dummy polls */}
      <h2>Available Polls</h2>
      {dummyPolls.map((poll) => (
        <div key={poll.id}>
          <h3>{poll.title}</h3>
          <ul>
            {poll.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PollsPage;
