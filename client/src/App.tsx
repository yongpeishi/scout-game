import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('empty');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
