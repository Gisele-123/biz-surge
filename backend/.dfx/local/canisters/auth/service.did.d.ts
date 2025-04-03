import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface User {
  'emailVerified' : boolean,
  'name' : string,
  'email' : string,
  'passwordHash' : string,
}
export interface _SERVICE {
  'getCurrentUser' : ActorMethod<[], [] | [User]>,
  'login' : ActorMethod<[string, string], boolean>,
  'signup' : ActorMethod<[string, string, string, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
