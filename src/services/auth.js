import { Actor, HttpAgent } from "@dfinity/agent";
import { auth } from "../../declarations/auth";

// 1. Initialize Agent
const agent = new HttpAgent({ 
  host: config.host
});

// 2. Fetch root key for local development
if (process.env.DFX_NETWORK === "local") {
  await agent.fetchRootKey();
}

// 3. Create Actor
export const authActor = Actor.createActor(auth.idlFactory, {
  agent,
  canisterId: config.authCanisterId
});

// 4. Auth Functions
export const login = async (email, password) => {
  return await authActor.login(email, password);
};

export const signup = async (userData) => {
  return await authActor.signup(
    userData.name,
    userData.email,
    userData.password,
    userData.confirmPassword
  );
};

export const getCurrentUser = async () => {
  return await authActor.getCurrentUser();
};