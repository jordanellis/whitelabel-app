import { Button, Container } from "@mui/material";
import TableComponent from "./TableComponent";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ p: "2rem" }}>
      <Button onClick={() => navigate("/")}>Back</Button>
      <TableComponent />
    </Container>
  );
}
