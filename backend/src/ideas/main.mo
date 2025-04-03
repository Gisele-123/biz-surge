// main.mo
import Array "mo:base/Array";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";

actor Ideas {
  public type IdeaId = Nat;
  public type UserId = Principal;

  public type Idea = {
    id : IdeaId;
    title : Text;
    description : Text;
    creator : UserId;
    createdAt : Int;
    tags : [Text];
  };

  // Simple in-memory storage
  private stable var nextId : IdeaId = 1;
  private stable var ideas : [Idea] = [];

  // Create a new idea
  public shared ({ caller }) func createIdea(title : Text, description : Text, tags : [Text]) : async IdeaId {
    let newIdea : Idea = {
      id = nextId;
      title;
      description;
      creator = caller;
      createdAt = Time.now();
      tags;
    };

    ideas := Array.append(ideas, [newIdea]);
    nextId += 1;
    newIdea.id
  };

  // Get all ideas
  public query func getAllIdeas() : async [Idea] {
    ideas
  };

  // Get ideas by user
  public query func getUserIdeas(user : UserId) : async [Idea] {
    Array.filter(ideas, func (idea : Idea) : Bool { idea.creator == user })
  };

  // Get single idea by ID
  public query func getIdea(id : IdeaId) : async ?Idea {
    Array.find(ideas, func (idea : Idea) : Bool { idea.id == id })
  };
};