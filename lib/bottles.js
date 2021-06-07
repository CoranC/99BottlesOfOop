import { downTo } from './helpers';

export class Bottles {

  _bottle(numBottles){
    return numBottles === 1 ? 'bottle' : 'bottles';
  }

  _numBottles(numBottles){
    return numBottles > 0 ? numBottles : 'no more';
  }

  _itOrOne(numBottles){
    return numBottles === 1 ? 'it' : 'one';
  }
  
  _finalVerse(){
    return 'No more bottles of milk on the wall, ' +
      'no more bottles of milk.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of milk on the wall.\n';
  }

  _createRange(hi, lo){
  let num = hi;
    const range = [];
    while(num >= lo){
      range.push(num);
      num -= 1;
    }
    return range;
  }
  
  verses(numBottlesStart, numBottlesEnd){
    const range = this._createRange(numBottlesStart, numBottlesEnd);
    let verseString = '';
    for(let i = 0; i < range.length; i++){
      verseString += this.verse(range[i]);
      if(i < range.length - 1){
        verseString += '\n';
      }
    }
    return verseString
  }

  verse(numBottles){
    if(numBottles === 0){
      return this._finalVerse();
    }
    return `${this._numBottles(numBottles)} ${this._bottle(numBottles)} of milk on the wall, ` +
      `${this._numBottles(numBottles)} ${this._bottle(numBottles)} of milk.\n` +
      `Take ${this._itOrOne(numBottles)} down and pass it around, ` +
      `${this._numBottles(numBottles-1)} ${this._bottle(numBottles-1)} of milk on the wall.\n`;
  }

  song(){
    return this.verses(99, 0)
  }
}