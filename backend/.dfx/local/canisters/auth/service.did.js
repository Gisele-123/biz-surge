export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    'emailVerified' : IDL.Bool,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'passwordHash' : IDL.Text,
  });
  return IDL.Service({
    'getCurrentUser' : IDL.Func([], [IDL.Opt(User)], ['query']),
    'login' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'signup' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
