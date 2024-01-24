// src/components/CogGames.js

import React from 'react';

const CogGames = () => {
  // Sample data for each card with redirect links
  const cardsData = [
    { id: 1, description: 'Differences', imageUrl: 'spot.png', link: 'https://www.mentalup.co/samples/game-v2/game11?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.' },
    { id: 2, description: 'Logi Balls', imageUrl: 'logi.png', link: 'https://www.mentalup.co/samples/game-v2/game18?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.'},
    { id: 3, description: 'Chess', imageUrl:'chess.jpeg', link: 'https://poki.com/en/g/master-chess.'},
    { id: 4, description: 'Solitaire', imageUrl:'soli.jpeg',link:'https://solitaired.com/.'},
    { id: 5, description: 'TicTacToe', imageUrl:'tic.png',link:'https://poki.com/en/g/tic-tac-toe-3.' },
    { id: 6, description: 'Word Puzzle', imageUrl:'word.jpeg',link:'https://www.free-word-search.com/.' },
    { id: 7, description: 'Jigsaw Puzzle', imageUrl:'jiz.jpeg',link:' https://poki.com/en/g/jigsaw-photo-puzzle-summer.'},
    { id: 8, description: 'Ludo', imageUrl:'ludo.png',link:'https://ludoking.com/h5/.' },
    { id: 9, description: 'Word Hunt', imageUrl:'hunt.png',link:'https://www.mentalup.co/samples/game/game40?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.' },
    { id: 10, description: 'Follow it!', imageUrl:'boxes.png',link:'https://www.mentalup.co/samples/game/game13?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.' },
    { id: 11, description: 'Let’s Find It', imageUrl:'find.png',link:'https://www.mentalup.co/samples/game-v2/game39?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.' },
    { id: 12, description: 'Same Old', imageUrl:'clock.png',link:'https://www.mentalup.co/samples/game/game57?referrer=blog-free-brain-games-for-seniors&page=Desktop&ga_dp=%2Fblog%2Ffree-brain-games-for-seniors.' },

    // ... (similarly for other cards)
  ];

  const handleCardClick = (link) => {
    // Use react-router-dom or window.location.href to navigate to the specified URL
    window.location.href = link;
  };

  return (
    <>
      <h2>Cognitive Mental Games.. just for fun !</h2>
      <div className='my-3 mx-5' style={{ border: '0.2px solid black', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '23px', maxWidth: '800px' }}>
            {cardsData.map((card) => (
              <div key={card.id} style={{ flex: '0 0 calc(25% - 20px)', marginBottom: '40px', position: 'relative' }}>
                <div
                  style={{
                    padding: '15px',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    height: '100%',
                  }}
                  onClick={() => handleCardClick(card.link)}
                  Style={{ cursor: 'pointer' }}
                >
                  <img
                    src={card.imageUrl}
                    alt={`Card ${card.id}`}
                    style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <p style={{ fontFamily: 'verdana', fontSize: '20px', paddingTop: '5px' }}>{card.description}</p>
                  <button style={{ backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>
                    Click Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CogGames;
