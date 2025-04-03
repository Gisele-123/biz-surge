export const idlFactory = ({ IDL }) => {
  const IdeaId = IDL.Nat;
  const UserId = IDL.Principal;
  const Idea = IDL.Record({
    'id' : IdeaId,
    'title' : IDL.Text,
    'creator' : UserId,
    'createdAt' : IDL.Int,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
  });
  return IDL.Service({
    'createIdea' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Vec(IDL.Text)],
        [IdeaId],
        [],
      ),
    'getAllIdeas' : IDL.Func([], [IDL.Vec(Idea)], ['query']),
    'getIdea' : IDL.Func([IdeaId], [IDL.Opt(Idea)], ['query']),
    'getUserIdeas' : IDL.Func([UserId], [IDL.Vec(Idea)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
