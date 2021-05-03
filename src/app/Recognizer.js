export const language = [
  "mr jackson",
  "mr jack",
  "mr jason",
  "mr johnson",
  "mr john",
  "dr jackson",
  "dr jack",
  "dr jason",
  "dr johnson",
  "dr john",
  "jackson",
  "jack",
  "jason",
  "johnson",
  "john",
];

const STATUS = {
  RUNNING: "Running",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
};

const startState = 0;
const acceptStates = [16];
const trapStates = [15];
const transitionMatrix = [
  [
    15,
    15,
    15,
    11,
    15,
    15,
    15,
    15,
    15,
    1,
    15,
    15,
    13,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    2,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    8,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    3,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    5,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    4,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    5,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    6,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    7,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    9,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    10,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    5,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    12,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    14,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    12,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    1,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
    15,
  ],
  [
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
  ],
];

function mapCharToSymbol(char) {
  var symbol = char.charCodeAt(0) - 97;
  if (!(symbol < transitionMatrix[0].length - 1 && symbol >= 0)) {
    switch (char) {
      case " ":
        symbol = 26;
        break;
      case ".":
        symbol = 27;
        break;
      case ",":
        symbol = 28;
        break;
      default:
        symbol = 29;
        break;
    }
  }
  return symbol;
}

export default class Recognizer {
  process(input) {
    const lines = input.split(/\r?\n/);
    const patterns = language.reduce(
      (acc, pattern) => ((acc[pattern] = { pattern, count: 0 }), acc),
      {}
    );
    var totalOccurrences = 0;

    var linesResult = [];

    // line level
    for (var i = 0; i < lines.length; i++) {
      const processedLine = this.processSingleLine(lines[i]);
      linesResult.push(processedLine);

      for (let [key, value] of Object.entries(processedLine.patterns)) {
        patterns[key].count += value.count;
        totalOccurrences += value.count;
      }
    }
    return { patterns, linesResult, totalOccurrences };
  }

  processSingleLine(rawLine) {
    const line = rawLine.toLowerCase();
    var dfaMap = {};
    var acceptedDFAs = [];

    // char level
    for (var i = 0; i < line.length; i++) {
      const char = line[i];
      const symbol = mapCharToSymbol(char);
      dfaMap[i] = new DFA(i);

      for (let [index, dfa] of Object.entries(dfaMap)) {
        dfa.consume(char, symbol);
        switch (dfa.status) {
          case STATUS.REJECTED:
            delete dfaMap[index];
            break;
          case STATUS.ACCEPTED:
            acceptedDFAs.push(dfa);
            delete dfaMap[index];
            break;
          default:
        }
      }
    }

    const patterns = language.reduce(
      (acc, pattern) => (
        (acc[pattern] = { pattern, count: 0, indexes: [] }), acc
      ),
      {}
    );

    var foundSet = new Set();

    acceptedDFAs.forEach((dfa) => {
      patterns[dfa.pattern].count++;
      patterns[dfa.pattern].sequence = dfa.sequence;
      patterns[dfa.pattern].indexes.push(dfa.index);
      foundSet.add(dfa.pattern);
    });

    return { patterns, acceptedDFAs, rawLine: line, foundSet };
  }
}

class DFA {
  constructor(index) {
    this.index = index;
    this.currentState = startState;
    this.status = STATUS.RUNNING;
    this.pattern = "";
    this.sequence = [0];
  }

  consume(char, symbol) {
    this.pattern += char;
    this.currentState = this.transit(this.currentState, symbol);
    this.sequence.push(this.currentState);

    if (acceptStates.includes(this.currentState)) {
      this.status = STATUS.ACCEPTED;
      this.pattern = this.pattern.slice(0, -1);
    }
    if (trapStates.includes(this.currentState)) {
      this.status = STATUS.REJECTED;
    }
  }

  transit(currentState, char) {
    return transitionMatrix[currentState][char];
  }
}
