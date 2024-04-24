import React from "react";
import { Container, Paper, TextField, Typography, Button } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const toggleLogin = () => {
    setIsLogin((prev)=>!prev);
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h6">Login</Typography>
            <form>
              <TextField
                required
                label="Username"
                fullWidth
                variant="outlined"
                margin="normal"
              />

              <TextField
                required
                label="Password"
                fullWidth
                type="Password"
                variant="outlined"
                margin="normal"
              />
            </form>
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              onClick={toggleLogin}
              type="submit"
              fullWidth
              color="info"
            >
              Login
            </Button>
            <Typography sx={{ marginTop: "1rem" }}>OR</Typography>
            <Button
              sx={{ marginTop: "0.5rem" }}
              variant="text"
              onClick={toggleLogin}
              type="submit"
              fullWidth
              color="info"
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <Typography>Register</Typography>
            <form>
              <TextField
                required
                label="Name"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <TextField
                label="Bio"
                fullWidth
                variant="outlined"
                margin="normal"
              />

              <TextField
                required
                label="Username"
                fullWidth
                variant="outlined"
                margin="normal"
              />

              <TextField
                required
                label="Password"
                fullWidth
                type="Password"
                variant="outlined"
                margin="normal"
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                onClick={toggleLogin}
                type="submit"
                fullWidth
                color="info"
              >
                Sign Up
              </Button>
              <Typography sx={{ marginTop: "1rem" }} textAlign={"center"} >OR</Typography>
              <Button
                sx={{ marginTop: "0.5rem" }}
                variant="text"
                onClick={toggleLogin}
                type="text"
                fullWidth
                color="info"
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
