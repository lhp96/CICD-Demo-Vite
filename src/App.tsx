import type { FC } from 'react';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

interface Props {
  value: string;
}

const App: FC<Props> = ({ value }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!!!!!!!!</p>
        <p>
          {/*
            测试代码中需要获取的DOM元素用role属性标记，这里的role属性只会在测试代码中用到，
            这样子就可以避免代码因需求改动时，因DOM属性改变导致测试不通过。有利于TDD（测试驱动开发）开发的进行
          */}
          <button role="button" type="button" onClick={() => setCount((v) => v + 1)}>
            count is: {count}
          </button>
        </p>

        <h1>2022.11.09--17:27</h1>
        <p role="props">{value}</p>
      </header>
    </div>
  );
};

export default App;
