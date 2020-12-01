import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Button from 'react-bootstrap/Button'

const App = () => {
  return (
    <Router>
      <div>
        <div className='row'>
          <img className='logo' src='https://lh3.googleusercontent.com/fife/ABSRlIpKX1njNFoxgyd73jIGcppMortGIHG0Faw7ltBH9TGbD4zqdPQezqEMVfzzi8rvI_p9Ht5suPIgJlXzyOIAZa4guM3Mt03A0OjRZ_i6sJ7AUl0-w4aYIFI-ayc4hbt5tEF_j3lxTD77IBj0eJvhcDCorUiJNpg8jIp0hT6gd2ovCng2C1HsB4v5zJodLcedq02zRLqlgD_bxfIENPFnKb1OKVqw_VRVEvp4ivW_dYL3dFniiJ81C9GXDe5O0Bp2p3HSoCxIrg84UXtlhP-hhfui2-mmfcoH4O9te9Rl0C9om990VpzY0uuBGYamBICJeOOp1iWM6020iyPcDI0p7UfpaMrSgUNgUwEUV_bfxgK0_3YntlDNNcJ9hoQyQMM7MrYAcIWDKw18vKhzllJGFzx2LcgaBEa0a8JKe-b_GU-Qo6jhwnPrKBtA4K4JFsN-rAV_Pg9nuQ1xJNPxPLt9uPFJv-vqpbTEek2C2Vk2o3KyNETTjOPwdAKWoXyFAt90kFnegJD1pK079qAzRnRDHBJc1qrazYDFEVlBmkOazrm3zLvSgeRY7Ol-YjQaGz-Np5L-atan9gt1L5gn3oMDIz87vE-Vx_Im3qU2CMZz3uBCyPiJEaI0ISGXdUZSv7VPg8k_txazdqf-FYfuLOMNXDCb-LRNN7NhAwkOdxDJrTE1U2CQu0KJMUZMttMZ0nbadAbSQH9aEio9QruxSRi3CvB1zmzhXMV0gh8J=s689-no?authuser=2' alt='cache technologies' />
        </div>
        <div className='row'>
          <Button variant="light">Home</Button>
          <Button variant="light">Shop</Button>
          <Button variant="light">Profile</Button>
          <Button variant="light">Cart</Button>
        </div>
      </div>
      <hr />

      <Switch>
        <Route path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/shop">
          {/* <Shop /> */}
        </Route>
        <Route path="/profile">
          {/* <Profile /> */}
        </Route>
        <Route path="/cart">
          {/* <Cart /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
