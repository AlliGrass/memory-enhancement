import vocabList from "../data/japaneseVocab.json"
import "../assets/styles/memoryCards.css"
import { useEffect, useState } from "react"

export const MemoryCards = () => {
    const [vocabListReduced, setVocabListReduced] = useState()
    const [randomisedCards, setRandomisedCards] = useState([])

    const [selectedCards, setSelectedCards] = useState([])
    const [completedPairs, setCompletedPairs] = useState([])

    const firstVocabType = "furigana"

    const secondVocabType = "english"

    const tempWorkingDict = vocabList.verb
    
    const shuffleCards = (vocabArrayList, firstVocabType, secondVocabType, pairAmount) => {
        const shuffledVocabList = vocabArrayList.sort(() => 0.5 - Math.random())
        const workingVocabList = shuffledVocabList.slice(0, pairAmount)

        setVocabListReduced(shuffledVocabList.slice(0, pairAmount))


        

        const firstVocabTypeList = workingVocabList.map(vocabItem => vocabItem[firstVocabType])
        const secondVocabTypeList = workingVocabList.map(vocabItem => vocabItem[secondVocabType])

        const vocabCompleteList = [...firstVocabTypeList, ...secondVocabTypeList]



        setRandomisedCards(vocabCompleteList.sort(() => 0.5 - Math.random()))

        setSelectedCards([])
        setCompletedPairs([])

    }

    const handleSelectCard = (e) => {
        console.log(e.target.id)
        e.target.className = "memory-card selected"
        setSelectedCards([...selectedCards, e.target.id])

    }

    useEffect(() => {
        if (selectedCards.length === 2) {
            // check pair
            const [firstCard, secondCard] = selectedCards


            const isMatch = vocabListReduced.some((vocabListReducedItem) => 
                (vocabListReducedItem[firstVocabType] === firstCard && vocabListReducedItem[secondVocabType] === secondCard) || 
                (vocabListReducedItem[firstVocabType] === secondCard && vocabListReducedItem[secondVocabType] === firstCard)
            )

            console.log(isMatch)

            if (isMatch) {
                setCompletedPairs([...completedPairs, firstCard, secondCard])
            }

            setSelectedCards([])
        }
    })
    

    return (
        <div>
            <section>
                <h1>Memory Match</h1>
                <h2>[Language] - [Vocab Type]</h2>
                <span>time | accumulative score</span>
                <button onClick={() => shuffleCards(tempWorkingDict, firstVocabType, secondVocabType, 4)}>Start Game</button>

            </section>
            <section>
                <div className="memory-match-playground">
                    {randomisedCards.map((vocabInfo) => {
                        return (
                            <div className={completedPairs.includes(vocabInfo) ? "completed-pair" : ''} key={vocabInfo} id={vocabInfo} onClick={handleSelectCard}>
                                {vocabInfo}   
                            </div>
                        )
                    })}
                </div>
                


                
                {/* difficulty easy: all visible
                    difficulty hard: all hidden, match translations */}
            </section>
        </div>
        
    )
}

