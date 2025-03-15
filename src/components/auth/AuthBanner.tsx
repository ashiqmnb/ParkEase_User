import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/ParkEase_Logo_noBg.png";
import { Link, useLocation } from "react-router-dom";
const AuthBanner = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: { xs: "250px", md: "450px" },
        width: "400px",
        backgroundColor: "#101921",
        borderRadius: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Li",
              color: "#2DC98A",
              fontSize: { xs: "24px", md: "30px" },
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Welcome To <br />
            ParkEase
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "12px", md: "18px" },
            }}
          >
            Reserve, Park, Relex
          </Typography>
        </Box>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: "200px",
            height: "auto",
          }}
        />
      </Box>

      {location.pathname === "/auth/login" && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontFamily: "Li", color: "white" }}>
            Don’t have an Account?
          </Typography>
          <Typography
            component={Link}
            to="/auth/register"
            sx={{
              fontFamily: "Li",
              color: "#2DC98A",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign Up
          </Typography>
        </Box>
      )}

      {location.pathname === "/auth/register" && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontFamily: "Li", color: "white" }}>
            Already have an Account?
          </Typography>
          <Typography
            component={Link}
            to="/auth/login"
            sx={{
              fontFamily: "Li",
              color: "#2DC98A",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign In
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AuthBanner;
