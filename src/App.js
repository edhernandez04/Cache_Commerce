import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div class='row'>
        <img class='logo' src='https://lh3.googleusercontent.com/_ss2KrA36gFxGG0mVGjdNpzjMqKI6xd3Tznj26yS_UiCXemn8YGjDhLZYxi_9JNA5S1b68eaPIjnPZAiyJT-CB4wCFSHWEQuc-2VzFqxMWFIRGD5kg-01PjqGaix5JRbAhsh-ElrhzEzSznE4--lIq1REe3uMXkbB6YkGEfze7jGvN1AaYtDlZPI06avestI-GMQyTlMlMiW2zBWHgFNNCBWH7hsN57putT-ANAAL4nQkGvnF85OrSlm5T-g4RXvM_HaGeztUipxeJSOIpxgxmGFuT-kdMhvpqLGxvKVeIaf95UIbh9pYyxAH6K-dqF-SA7k8AogLLdFCIRWGek8PSxXi5YPnObVsegp1UngnEMA7KlJv0AIlOgHowyQkAXABGfVR7CK1HaZ95f1aPf5VHLrcKW5W7skzc8Nbjd4LI2h1E_7dIjYDV8OuWPgjutsRwHOON65Zo7aTH8QrWmm9Xfhxzf07isfcWl7Nf49SyT0uX2UwYU_r2-ZgNeQ9sNFDnLmKrg6tvqu_9stCCU4ZKnUJ3hWIz0R3wgmSvfrxug0nkepBXEOj5aeQFjWyR_zp7RBrjFChUTX6lM8B7w68EhCVdQqhERAnbZsYimJJE9zKDJcgbOnbzBmiG2tg9V9IezW1hSupgYUwa-XQEd7MTPerg3bIvNIq6XOlCfHGVCJfw_zFjs150C70lRP=s689-no?authuser=2' alt='cache'></img>
        <div>
          <button>Home</button>
          <button>Shop</button>
          <button>Profile</button>
          <button>Cart</button>
        </div>
        <hr />
      </div>
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
