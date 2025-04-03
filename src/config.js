// Frontend configuration
export const config = {
    authCanisterId: process.env.AUTH_CANISTER_ID,
    host: process.env.DFX_NETWORK === "local" 
      ? "http://localhost:4943" 
      : "https://ic0.app"
  };