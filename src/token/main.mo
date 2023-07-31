import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {
  var owner : Principal = Principal.fromText("p7jrj-hweq2-naf7t-be6dg-tison-6wszm-zkof4-f5it2-xjhup-rxkum-rqe");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "SANG";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  public query func balanceOf(who : Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };

    return balance;
  };
  public query func getSymbol() : async Text {
    return symbol;
  };

  public shared (msg) func payOut() : async Text {
    // Debug.print(debug_show (msg.caller));
    let amount = 10000;
    balances.put(msg.caller, amount);

    return "Success";
  };
};
