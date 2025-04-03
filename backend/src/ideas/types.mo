module {
    // Core Types
    public type IdeaId = Nat;
    public type UserId = Principal;
    public type Timestamp = Int; // Using Int for Time.now()

    // User Input Types
    public type UserInput = {
        prompt : Text;
        skills : [Text];
        industry : Text;
        marketSizePref : MarketSize;
        competitionPref : CompetitionLevel;
    };

    // Idea Generation Types
    public type IdeaInput = {
        title : Text;
        description : Text;
        marketSize : MarketSize;
        competition : CompetitionLevel;
        marketTrend : Text;
        tags : [Tag];
        requiredSkills : [Text];
    };

    public type Idea = {
        id : IdeaId;
        title : Text;
        description : Text;
        marketSize : MarketSize;
        competition : CompetitionLevel;
        marketTrend : Text;
        tags : [Tag];
        requiredSkills : [Text];
        creator : UserId;
        createdAt : Timestamp;
        savedBy : [UserId]; // List of users who saved this idea
        views : Nat;
        rating : ?Float; // Optional average rating
    };

    // Enums
    public type MarketSize = {
        #small;  // <$1B
        #medium; // $1B-$10B
        #large;  // >$10B
        #any;
    };

    public type CompetitionLevel = {
        #low;
        #medium;
        #high;
        #any;
    };

    public type Tag = {
        #technology;
        #ecommerce;
        #healthcare;
        #education;
        #finance;
        #sustainability;
        #ai;
        #saas;
        #custom : Text; // For user-defined tags
    };

    // Response Types
    public type GenerateIdeasResponse = {
        #success : [IdeaId];
        #invalidInput : Text;
        #rateLimited;
    };

    public type SaveIdeaResponse = {
        #success;
        #notFound;
        #alreadySaved;
    };

    // Error Types
    public type Error = {
        #unauthorized;
        #notFound;
        #invalidInput : Text;
        #rateLimited;
        #internalError : Text;
    };

    // API Types
    public type IdeasAPI = actor {
        saveUserInput : shared UserInput -> async ();
        generateIdeas : shared () -> async GenerateIdeasResponse;
        getIdea : shared query IdeaId -> async ?Idea;
        getUserIdeas : shared query UserId -> async [Idea];
        getSavedIdeas : shared query UserId -> async [Idea];
        saveIdea : shared (IdeaId) -> async SaveIdeaResponse;
        rateIdea : shared (IdeaId, Float) -> async ();
        getTrendingIdeas : shared query () -> async [Idea];
        searchIdeas : shared query Text -> async [Idea];
    };
};