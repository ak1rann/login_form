import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", date: "" });
  const toggleDetailsDropdown = () => setIsDetailsOpened((prev) => !prev);

  useEffect(() => {
    const getuser = localStorage.getItem("useryoutube");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)[0];

      setUserData({
        name: user?.name,
        email: user?.email,
        date: user?.date,
      });
    }
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            Реєстрація користувача
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-2">
              додому
            </NavLink>
            <NavLink to="/" className="text-decoration-none text-light">
              особливості
            </NavLink>
          </Nav>
          <div style={{ position: "relative" }} onClick={toggleDetailsDropdown}>
            <img
              style={{
                width: "60px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              src="https://i.pravatar.cc/300"
              alt="avatar"
            />
            {isDetailsOpened && (
              <div
                style={{
                  width: "300px",
                  minHeight: "400px",
                  position: "absolute",
                  right: "0px",
                  bottom: "-420px",
                  backgroundColor: "green",
                }}
              >
                <div>Name: {userData.name}</div>
                <div>Birthday: {userData.date}</div>
                <div>Email: {userData.email}</div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

