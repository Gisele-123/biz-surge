// This helps TypeScript understand the .env variables
declare namespace NodeJS {
    interface ProcessEnv {
      DFX_NETWORK: 'local' | 'ic';
      AUTH_CANISTER_ID: string;
    }
  }
  
  // This helps TypeScript understand the generated declarations
  declare module "@declarations/auth" {
    export const canisterId: string;
    export const createActor: (
      canisterId: string, 
      options: { agentOptions?: { identity?: any, host?: string } }
    ) => any;
  }