import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Idea {
  'id' : IdeaId,
  'title' : string,
  'creator' : UserId,
  'createdAt' : bigint,
  'tags' : Array<string>,
  'description' : string,
}
export type IdeaId = bigint;
export type UserId = Principal;
export interface _SERVICE {
  'createIdea' : ActorMethod<[string, string, Array<string>], IdeaId>,
  'getAllIdeas' : ActorMethod<[], Array<Idea>>,
  'getIdea' : ActorMethod<[IdeaId], [] | [Idea]>,
  'getUserIdeas' : ActorMethod<[UserId], Array<Idea>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
