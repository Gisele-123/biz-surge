import Text "mo:base/Text";
import Principal "mo:base/Principal";
import TrieMap "mo:base/TrieMap";

actor Auth {
  // ----- Types -----
  type User = {
    name: Text;
    email: Text;
    passwordHash: Text;
    emailVerified: Bool;
  };

  // ----- Storage -----
  private var users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
  private var emails = TrieMap.TrieMap<Text, Principal>(Text.equal, Text.hash);

  // ----- Authentication Methods -----
  public shared ({ caller }) func signup(
    name: Text,
    email: Text,
    password: Text,
    confirmPassword: Text
  ) : async Bool {
    if (Principal.isAnonymous(caller)) return false; // Prevent anonymous signups
    if (password != confirmPassword) return false;
    if (Text.size(password) < 8) return false;
    
    switch (emails.get(email)) {
      case (?_) { false }; // Email already exists
      case null {
        let user : User = {
          name;
          email;
          passwordHash = password; // In production, use Crypto library!
          emailVerified = false;
        };
        users.put(caller, user);
        emails.put(email, caller);
        true
      }
    }
  };

    // ----- Email Verification -----
  public shared ({ caller }) func verifyEmail() : async Bool {
    switch (users.get(caller)) {
      case (?user) {
        let updated = { user with emailVerified = true };
        users.put(caller, updated);
        true
      };
      case null { false }
    }
  };

  public shared ({ caller }) func login(email: Text, password: Text) : async Bool {
    switch (emails.get(email)) {
      case (?userId) {
        switch (users.get(userId)) {
          case (?user) {
            if (not user.emailVerified) return false;
            password == user.passwordHash // In production, use secure comparison
          };
          case null { false }
        }
      };
      case null { false }
    }
  };

  // ----- Helpers -----
  public shared query ({ caller }) func getCurrentUser() : async ?User {
    users.get(caller)
  };
}