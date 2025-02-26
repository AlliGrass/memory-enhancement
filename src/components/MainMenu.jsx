export const MainMenu = () => {
    return (
        <div>
          <div>
            <section>
              <h1>Language</h1>
              <p>Currently Selected: </p>
              <div>
                <button>Japanese</button>
                {/* {if language = japanese (ask for kanji, furigana, romanji) } */}
              </div>
            </section>
            <section>
              <h1>Game</h1>
              <p>Currently Selected: </p>
              <div>
                <button>Memory Cards</button>
                <button>Complete The Sentence</button>
              </div>
              <div>
                {/* game settings */}
              </div>
            </section>
            <section>
              <h1>Vocabulary Lists</h1>
            </section>
            <section>
              <button>Play Game</button>
            </section>
          </div>
    
        
    
        </div>
      )
}
