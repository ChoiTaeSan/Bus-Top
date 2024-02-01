import React, { useState } from 'react';
import './App.css';

function App() {
  // 사용자 이름과 비밀번호 상태 관리
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // 로그인 버튼 클릭 이벤트 핸들러
  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 방지
    // 여기서 실제 로그인 로직 구현 (예: API 호출)
    // 예시를 위해 단순 사용자 이름과 비밀번호 확인
    if (username === 'user' && password === 'pass') {
      setLoginMessage('로그인 성공!');
    } else {
      setLoginMessage('로그인 실패: 잘못된 사용자 이름 또는 비밀번호');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button type="submit">로그인</button>
        </form>
        {loginMessage && <p>{loginMessage}</p>}
      </header>
    </div>
  );
}

export default App;
