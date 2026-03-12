import Map "mo:core/Map";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Int.compare(msg1.timestamp, msg2.timestamp);
    };
  };

  var nextId = 0;
  let messages = Map.empty<Nat, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(nextId, contactMessage);
    nextId += 1;
  };

  public query ({ caller }) func getMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };

  public query ({ caller }) func getMessage(id : Nat) : async ?ContactMessage {
    messages.get(id);
  };
};
