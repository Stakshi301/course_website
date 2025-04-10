import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import {toggleTheme} from './redux/Slice';

const Navbar = () => {

  const dispatch=useDispatch();
  const selector=useSelector((state)=>state.theme.Theme)

  function handleToggle(){
dispatch(toggleTheme());
document.body.classList.toggle('dark-mode');
  }

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className={`navbar navbar-expand-lg border-custom my-2 ${selector ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
              <div className="container-fluid">
                <NavLink className="navbar-brand gradient-text" to="/">
                  DevLTops
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >

<div className="text-end w-100">
  <button className="btn btn-outline-dark py-1 px-2" onClick={handleToggle}>
    {selector ? <FaSun /> : <FaMoon />}
  </button>
</div>


                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "nav-link menu_active" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/service"
                        className={({ isActive }) =>
                          isActive ? "nav-link menu_active" : "nav-link"
                        }
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "nav-link menu_active" : "nav-link"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "nav-link menu_active" : "nav-link"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
