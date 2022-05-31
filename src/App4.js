
import { useEffect, useState } from "react";

function App4() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
            .then(response => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false);
            });

    },[]);
   // const onChange = (event) => setLoading(event.target.value);
    
    return (
        <div>
            <h1>The Coins! { loading ? "" : `(${coins.length})` }</h1>
            { loading ? (<strong>Loding...</strong>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default App4;
