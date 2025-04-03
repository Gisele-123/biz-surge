import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { createActor } from "@declarations/auth";
import { canisterId } from "@declarations/auth";

export async function initAuth() {
  const authClient = await AuthClient.create({
    idleOptions: {
      disableIdle: true,
      disableDefaultIdleCallback: true
    }
  });

  // Create an agent and set the authenticated identity
  const agent = new HttpAgent({ identity: authClient.getIdentity() });

  // Fetch root key ONLY in development mode
  if (process.env.DFX_NETWORK !== "ic") {
    await agent.fetchRootKey();
  }

  return { authClient, agent };
}

export async function getAuthenticatedActor() {
  const { authClient, agent } = await initAuth();
  const identity = authClient.getIdentity();

  // Set the agent manually before calling `createActor`
  return createActor(canisterId, {
    agentOptions: { identity, host: process.env.DFX_HOST } // Use only allowed properties
  });
}
