class Lyrics {
  verse(number) {
    const count = new BottleCount();
    const bottle = count.getBottle(number);
    const lessBottle = count.getBottle(bottle.lessBottle());

    return (
      `${bottle
        .quantity()
        .capitalizeFirstLetter()} ${bottle.bottleWord()} of beer on the wall, ${bottle.quantity()} ${bottle.bottleWord()} of beer.\n` +
      `${bottle.whatTo()}, ${lessBottle.quantity()} ${lessBottle.bottleWord()} of beer on the wall.`
    );
  }

  verses(start, end) {
    let verses = "";

    while (start >= end) {
      verses += this.verse(start) + "\n\n";
      start--;
    }

    return verses.trim();
  }

  song() {
    return this.verses(99, 0);
  }
}

class BottleDefault {
  constructor(number) {
    this.number = number;
  }

  quantity() {
    return this.number.toString();
  }

  bottleWord() {
    return "bottles";
  }

  whatTo() {
    return `Take ${this.howMany()} down and pass it around`;
  }

  howMany() {
    return "one";
  }

  lessBottle() {
    return this.number - 1;
  }
}

class BottleOne extends BottleDefault {
  constructor() {
    super(1);
  }

  bottleWord() {
    return "bottle";
  }

  howMany() {
    return "it";
  }
}

class BottleZero extends BottleDefault {
  constructor() {
    super(0);
  }

  quantity() {
    return "no more";
  }

  whatTo() {
    return `Go to the store and buy some more`;
  }

  lessBottle() {
    return 99;
  }
}

class BottleCount {
  getBottle(number) {
    switch (number) {
      case 0:
        return new BottleZero(number);
      case 1:
        return new BottleOne(number);
      default:
        return new BottleDefault(number);
    }
  }
}

String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

module.exports = Lyrics;
