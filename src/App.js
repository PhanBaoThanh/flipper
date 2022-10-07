import './App.scss';
import {useState} from 'react'

function App() {
  const [active,setActive] = useState("hex")
  const [bgColor,setBgColor] = useState('#F1f5f8')
  const simple = ['blue','yellow','red','violet','aqua','cyan','gray','darkgray','gold']
  const hex = ['#F1f5f8','#284d23','#24451F','#203D1C','#1C3518','#182E15','#142611','#101E0E','#0C170A','#284d230','#3D5E39','#53704F','#688265','#7E947B','#93A691','#A9B7A7','#BEC9BD','#c9b9ec','#6f9a27','#6aa84f','#fdbcb4','#fdc1c1','#d02a0c','#127112','#c9b9ec','#95b6cf','#5a6edc','#fc0da1','#e70191','#cd1c98','#0ebabd','#90d3ed','#fdc1c1','#fed400','#ac7278','#905d5d','#722f37','#addfad','#7791a5','#9fbdd3','#9fbdd3','#95b6cf','#7791a5','#6897bb','#4a00b5','#583527','#f090f6','#9056fa','#fdbcb4','#bbb777','#addfad','#722f37','#40826d','#43b3ae','#979aaa','#905d5d','#a9ba9d','#c8a2c8','#fc8eac']

  const randomBgColor = () => {
    if(active === 'simple')
      setBgColor(simple[Math.floor(Math.random() * (simple.length -1))])
    else
      setBgColor(hex[Math.floor(Math.random() * (hex.length-1))])
  }

  const handleClickBtn = str => {
    if(str === 'simple' && active !== 'simple')
      setActive('simple')
    else if(str === 'hex' && active !== 'hex')
      setActive('hex')
  }

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <div className='header'>
        <div className='headerItem'>
          <div className='headerItemName'>Color Flipper</div>
          <div className='headerItemBtns'>
            <div className='headerItemBtn' onClick={() => handleClickBtn("simple")} style={{color: `${active === 'simple' ? 'hsl(205, 78%, 60%)' : ''}`}}>Simple</div>
            <div className='headerItemBtn' onClick={() => handleClickBtn("hex")} style={{color: `${active === 'hex' ? 'hsl(205, 78%, 60%)' : ''}`}}>Hex</div>
          </div>
        </div>
      </div>
        <div className='contentColor'>
          <p>Background Color : <span style={{color: 'hsl(205, 78%, 60%)'}}>{bgColor}</span></p>
        </div>

        <div className='contentBtn' onClick={randomBgColor}>CLICK ME</div>
    </div>
  );
}

export default App;