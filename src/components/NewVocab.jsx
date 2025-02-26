import { useCallback, useState } from "react"
import "../assets/styles/vocabCards.css"

export const NewVocab = () => {
    
    const [vocabType, setVocabType] = useState("noun")

    const [vocabItem, setVocabItem] = useState({
        kanji: "",
        furigana: "",
        romanji: "",
        english: ""
    })
    
    const [vocabList, setVocabList] = useState({
        noun: [],
        particle: [],
        pronoun: [],
        verb: []
    })
    
    const addVocab = useCallback(() => {
        setVocabList((prevList) => {
            const newList = {...prevList}
            newList[vocabType] = [...prevList[vocabType], vocabItem]
            return newList
        })
        return
    }, [vocabType, vocabItem])


    
    
    function generateJSONItem() {
        return JSON.stringify(vocabItem, null, 2)
    }
    function generateJSON() {
        return JSON.stringify(vocabList, null, 2)
    }

    return (
        <div>
            <h1>Enter New Vocab</h1>
            <section>
                <h2>Japanese</h2>
                <div>
                    <select name="vocab-type" id="" value={vocabType} onChange={(e) => {setVocabType(e.target.value)}}>
                        <option value="noun">Noun</option>
                        <option value="particle">Particle</option>
                        <option value="pronoun">Pronoun</option>
                        <option value="verb">Verb</option>
                    </select>
                </div>
                <div>
                    <label for="kanji">Kanji: </label>
                    <input type="text" name="kanji" value={vocabItem.kanji} onChange={(e) => {setVocabItem((prevVocabItem) => ({...prevVocabItem, kanji: e.target.value}))}}/>
                </div>
                <div>
                    <label for="furigana">Furigana: </label>
                    <input type="text" name="furigana" value={vocabItem.furigana} onChange={(e) => {setVocabItem((prevVocabItem) => ({...prevVocabItem, furigana: e.target.value}))}}/>
                </div>
                <div>
                    <label for="romanji">Romanji: </label>
                    <input type="text" name="romanji" value={vocabItem.romanji} onChange={(e) => {setVocabItem((prevVocabItem) => ({...prevVocabItem, romanji: e.target.value}))}}/>
                </div>
                <div>
                    <label for="english">English: </label>
                    <input type="text" name="english" value={vocabItem.english} onChange={(e) => {setVocabItem((prevVocabItem) => ({...prevVocabItem, english: e.target.value}))}}/>
                </div>
                <button onClick={addVocab}>Add Vocab</button>   
            </section>
            <section>
                <div className="vocab-card-list" id="vocab-card-list">
                    {Object.entries(vocabList).map(([type, vocabCardList]) => (
                        <div>
                            <h2>{type}s</h2>
                            <div className="vocab-type-list">
                                {vocabCardList.map((vocabCard, index) => (
                                    <div className="vocab-card" id="vocab-card" key={index}>
                                        <h3>{vocabCard.kanji}</h3>
                                        <p>{vocabCard.furigana}</p>
                                        <span>{vocabCard.romanji}</span>
                                        <p>{vocabCard.english}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h1>JSON Text</h1>
                <pre>{generateJSON()}</pre>
            </section>
        </div>
    )
}