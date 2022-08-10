import { lazy, ComponentType, LazyExoticComponent, Suspense } from 'react';
import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";


const LandingPageComponents: LazyExoticComponent<ComponentType<any>>[] = [];
__CLIENT_CONFIG__.components.forEach((component: string) => {
  LandingPageComponents.push(lazy(() => import(/* @vite-ignore */ component)));
});

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: "2rem" }}>
      <Typography
        sx={{
          display: "inline-block",
          color: "theme.secondary",
          fontSize: "1.5rem"
        }}
      >
        {__CLIENT_CONFIG__.bank}
      </Typography>
      <Button onClick={() => navigate("/accounts")} sx={{ m: "1rem" }}>
        View Accounts
      </Button>
      <Grid container spacing={2}>
        {LandingPageComponents.map((Component, i) => (
          <Grid item xs={12} key={i}>
            <Suspense fallback={<Skeleton variant="rectangular" />}>
              <Component />
            </Suspense>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
