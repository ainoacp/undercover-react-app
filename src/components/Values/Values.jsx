import { useContext, useState } from "react"
import { GlobalContext } from "../../App"

export default function Values() {

    const { list, start, setStart } = useContext(GlobalContext);
    const [gameList, setGameList] = useState();
    const [counter, setCounter] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const startGame = () => {
        setStart(true)
        const newGameList = [];
        for (const item of list) {
            for (let i = 0; i < item.counter; i++) {
                newGameList.push(item.name);
                
            }           
        }
        // setList(shuffle(newGameList))
    }

    const nextValue = () => {
        setCounter(counter + 1)
        setIsShow(false)
        if (counter === list.lenght -1) {
            setStart(false)
            setGameList(null)
            setCounter(0)
        }
    }

    return (
        <div>
            {!start && <button onClick={startGame}>Start</button>}
            {start && gameList && <>
                <div>
                    {gameList.map((gameItem, index) => 
                        <div>
                            <h2>{gameItem}</h2>
                        </div>
                    )}
                </div>
            {isShow && <button onClick={nextValue}>Next Player</button>}
            {!isShow && <button onClick={() => setIsShow(true)}>Show value</button>}
            </>
            }
        </div>
    )
}

// function shuffle () {

// }