import { useState } from 'react'
import './styles.css'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'
// import { start } from 'repl'

export default function App() {
  /* Challenge

	Kullanıcı kartın kapağına tıkladığında kart açılır ve kapanır, ancak kart şirketi daha sofistike bir kontrol yöntemi istiyor. Kullanıcının mouse ile parmağını kaydırmasını taklit eden bir yöntem. Göreviniz aşağıdaki gibi bir tane ayarlamaktır:
		
		1. "open" class'ı, 34. satırdaki className'i "cover" olan div'e yalnızca aşağıdaki koşulların tümü karşılandığında uygulanmalıdır: 
		   	
			   - Kullanıcı mouse butonunu "cover" div'inin içinde bir yerde basılı tutuyorsa.
			   
    		   - Mouse butonunu basılı tutmaya devam ederken, imleci basılı tutmaya başladığı yerin 50 piksel soluna hareket ettirir. 
		
		2. Kullanıcı daha sonra mouse'unu "cover" div'i açıkken aşağı doğru hareket ettirirse, "open" 
		   class'ı kaldırılmalı ve böylece kart kapatılmalıdır. 
		   
	Not: cardOpen state'ini, 33. satırdaki onClick olay işleyicisini ve 34. satırdaki "open" class'ının şu anda uygulanma şeklini değiştirmeniz veya düzenlemeniz gerekecektir. 
*/

const [cardOpen, setCardOpen] = useState(false)
const [startX, setStartX] = useState(null)

const handleMouseDown = (e) => {
  setStartX(e.clientX); // tıklama pozisyonunu kaydet
};

const handleMouseMove = (e) => {
  if (startX !== null) {
    const deltaX = e.clientX - startX;
    // Fareyi 50 piksel sola hareket ettirdiğimizde kartın açılması durumu.
    if (deltaX <= -50) {
      setCardOpen(true);
    }
  }
};
const handleMouseUp = (e) => {
  if (startX !== null) {
    const deltaY = e.clientY - e.clientY; // Fare hareketini takip etmek icin fonk.
    if (cardOpen && deltaY > 0) {
      setCardOpen(false); // Fareyi aşağıya hareket ettirdiğimizde kartı kapat
    }
    setStartX(null); // Fare serbest bırakıldığında başlangıç pozisyonunu sıfırla
  }
};
return (
  <div className='wrapper'>
    <Header />
    <div className='card'>
      <InnerMessage />
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove} // Fare hareketini izlemek için eklendi.
        onMouseUp={handleMouseUp}
        className={`cover ${cardOpen ? 'open' : ''}`}
      >
        <FrontMessage />
        <img src='./images/forLoop.png' alt="For Loop" />
      </div>
    </div>
  </div>
);
}