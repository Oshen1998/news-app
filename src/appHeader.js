import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import AppNewsContent from "./appNewsContent";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export const NAV_ITEMS = {
  BIT_COIN: "BIT_COIN",
  APPLE: "APPLE",
  TECH: "TECH",
  WSJ: "WSJ",
  NEW_YORK_TIMES: "NEW_YORK_TIMES",
  COVID: "COVID",
  SPORTS: "SPORTS",
  CRIME: "CRIME",
};

const NAV_LIST = [
  {
    key: NAV_ITEMS.BIT_COIN,
    name: "Bit Coin",
    path: "/categories/bitcoin",
    isSelected: true,
  },
  {
    key: NAV_ITEMS.APPLE,
    name: "Apple",
    path: "/categories/apple",
    isSelected: false,
  },
  {
    key: NAV_ITEMS.TECH,
    name: "Tech",
    path: "/categories/Technology",
    isSelected: false,
  },
  // {
  //   key: NAV_ITEMS.WSJ,
  //   name: "WSJ",
  //   path: "/categories/WSJ",
  //   isSelected: false,
  // },
  // {
  //   key: NAV_ITEMS.NEW_YORK_TIMES,
  //   name: "New York Times",
  //   path: "/categories/NY Times",
  //   isSelected: false,
  // },
  {
    key: NAV_ITEMS.COVID,
    name: "Covid",
    path: "/categories/Covid",
    isSelected: false,
  },
  {
    key: NAV_ITEMS.SPORTS,
    name: "Sports",
    path: "/categories/Sports",
    isSelected: false,
  },
  {
    key: NAV_ITEMS.CRIME,
    name: "Crime",
    path: "/categories/crime",
    isSelected: false,
  },
];

function AppHeader() {
  const [item, setItem] = useState({ key: "", isSelected: false });

  const changeSelection = (item) => {
    switch (item.key) {
      case NAV_ITEMS.BIT_COIN:
      case NAV_ITEMS.APPLE:
      case NAV_ITEMS.WSJ:
      case NAV_ITEMS.NEW_YORK_TIMES:
      case NAV_ITEMS.TECH:
      case NAV_ITEMS.SPORTS:
      case NAV_ITEMS.COVID:
      case NAV_ITEMS.CRIME:
        setItem({
          key: item.key,
          isSelected: true,
        });
        break;

      default:
        break;
    }
  };

  const setRedirectItem = () => {
    setItem({
      key: NAV_ITEMS.BIT_COIN,
      isSelected: true
    })
  };

  return (
    <div className="main-container">
      <div className="appTitle">
        <div>
          <header>News Paper</header>
        </div>
        <div className="appSubHeading">Headlines</div>
      </div>

      <div>
        <Router>
          <div className="appContentSection">
            <ul style={{ position: "sticky" }} className="navList">
              {NAV_LIST.map((navItem) => {
                return (
                  <li
                    key={navItem.key}
                    className={
                      item.isSelected && item.key === navItem.key ? "list" : ""
                    }
                  >
                    <Link
                      onClick={() => changeSelection(navItem)}
                      to={navItem.path}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Route path="*">
              <Redirect to="/categories/bitcoin" component={AppNewsContent} />
               {setRedirectItem}
            </Route>
            <Route path="/categories/:name" component={AppNewsContent} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default AppHeader;
