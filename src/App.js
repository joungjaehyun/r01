import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import Logo from "./components/Logo";
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zkiosk";
// index.js라 지었는데 폴더명만 들어감
// 폴더명만 보고 코드를 짤수있다 => 혼란성을 줄일수있다.
// index를 namaing룰상 소문자로 작성  고전적인 방식(2~3년전)
function App() {
  return (
    <div>
     <ZKiosk></ZKiosk>
    </div>
  );
}

export default App;
