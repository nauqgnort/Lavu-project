import React from "react";
import Routers from "./assets/routers/Routers";
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        token:{
          colorTextHeading:'#f79009'
        },
        components:{}
      }}>
      <Routers/>
    </ConfigProvider>
  );
}

export default App;
