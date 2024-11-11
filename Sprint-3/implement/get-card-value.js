// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
function getCardValue(cardString) {
  cardStringPadded = cardString.padStart(3, "0");
  rank = cardStringPadded.substring(0, 2);
  if (2 <= rank && rank <= 10) return rank;
  if (rank == "0A") return 11;
  if (rank == "0Q" || rank == "0J" || rank == "0K") return 10;
  else return "Invalid Card rank";
}
//console.log(getCardValue("3B"));
console.assert(
  getCardValue("Q♠") == "10",
  "the rturn value for `Q♠` must be 10"
);
console.assert(
  getCardValue("A♠") == "11",
  "the rturn value for `A♠` must be 11"
);
console.assert(
  getCardValue("3♠") == "03",
  "the rturn value for `3♠` must be 3"
);
console.assert(
  getCardValue("K♠") == "10",
  "the rturn value for `K♠` must be 10"
);
console.assert(
  getCardValue("J♠") == "10",
  "the rturn value for `J♠` must be 10"
);
