import { useState, useEffect } from "react";
import "../assets/styles/gramaticalRuleJpVerb.css"

import grammarRule from "../data/grammaticalRulesJpVerbs.json"
import japaneseVocabList from "../data/japaneseVocab.json"

export const GrammaticalRuleJpVerb = () => {
    const [japaneseVerbs, setJapaneseVerbs] = useState([])
    const [grammarRuleCompletion, setGrammarRuleCompletion] = useState(
        {
            "う": [],
            "ある": [],
            "うる": [],
            "おる": [],
            "つ": [],
            "く": [],
            "す": [],
            "ぶ": [],
            "む": [],
            "ぐ": [],
            "いる": [],
            "える": [],
            "くる": [],
            "する": [],
            "": []
        }
    )

    const [movingCard, setMovingCard] = useState();
    const grammarArray = Object.keys(grammarRule)
    const initiliseGame = () =>{
        setGrammarRuleCompletion(grammarRule)
        setJapaneseVerbs(japaneseVocabList.verb)
    }

    const checkCompletion = () => {
        console.log(grammarRuleCompletion)
    }

    // console.log(japaneseVerbs)

    const selectMovingCard = (e) => {
        if (movingCard) {
            movingCard.className = "verb-card"
        } 
        if (e !== null) {
            e.target.className = "verb-card active"
            setMovingCard(e.target)
        }
    }

    const correctSelection = (selectedRule, cardValue) => {
        const ruleLength = selectedRule.length
        const cardRule = cardValue.slice(-ruleLength)

        if (cardRule === selectedRule) {
            return true
        } else {
            return false
        }
    }

    const selectMovingLocation = (e) => {
        console.log(e.target.id)
        if (movingCard){
            if (correctSelection(e.target.id, movingCard.id)) {
                
                setGrammarRuleCompletion({...grammarRuleCompletion, [e.target.id]: [...grammarRuleCompletion[e.target.id], movingCard.id]})


                selectMovingCard(null)
                setJapaneseVerbs(japaneseVerbs.filter((verbItem) => {
                    return verbItem.furigana != movingCard.id
                }))
            } else {
                console.log("incorrect")
            }
            movingCard.className = "verb-card"
        }
    }


    return (
        <div>
            <section>
                <h1>Grammar Rule</h1>    
                <button onClick={initiliseGame}>Start Game</button>
                <button onClick={checkCompletion}>check completion</button>
            </section>    
            <section className="border">

                {grammarArray.map((rule) => {
                    return (
                        
                        <div className="grammatical-table">
                            <span>
                                {rule}
                            </span>
                            <ul className="verb-drop-zone" id={rule} onClick={selectMovingLocation} >
                                {grammarRuleCompletion[rule].map((card) => {
                                    return (
                                        <div style={{
                                            userSelect: 'none'
                                        }} className="verb-card" id={card} onClick={selectMovingCard}>
                                            {card}
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                        
                    )
                })}
            </section>  
            <section>
                <div className="card-selection">
                    {japaneseVerbs.map((verbItem) => {
                        return (
                            <div style={{
                                userSelect: 'none'
                            }} className="verb-card" id={verbItem.furigana} onClick={selectMovingCard}>
                                {verbItem.furigana}
                            </div>
                        )
                    })} 
                </div>
                   
            </section>      
        </div>
    )
}