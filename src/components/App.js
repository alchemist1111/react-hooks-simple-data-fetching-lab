import React, { useState, useEffect} from 'react';
function App() {
const [isDogPic, setIsDogPic] = useState(null);

useEffect(() => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    setIsDogPic(data.message)});
}, []);

if (!isDogPic) return <p>Loading...</p>

return <img src={isDogPic} alt="A Random Dog" />
}

export default App;