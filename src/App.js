
// index.js라 지었는데 폴더명만 들어감
// 폴더명만 보고 코드를 짤수있다 => 혼란성을 줄일수있다.

import Kiosk from "./components/kiosk";
// index를 namaing룰상 소문자로 작성  고전적인 방식(2~3년전)
function App() {
  return (
    <div>
      <Kiosk></Kiosk>

    </div>
  );
}

export default App;
