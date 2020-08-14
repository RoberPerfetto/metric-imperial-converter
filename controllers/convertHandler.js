/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var exp = /\d+(.\d+)?/g;
    var result = input.match(exp);
    if(!result) {
      let index=input.indexOf(input.match(/\D/));
      if(index==0) return 1;
    } 
    if(/\//.test(input)) {
      let count = input.match(/\//g);
      if(count.length < 2) {
        let num1 = parseInt(input.match(/(\d+|\d+\.\d+)(?=\/)/g),10);
        let num2 = parseInt(input.match(/(?<=\/)(\d+|\d+\.\d+)/g),10);
        return num1 / num2;  
      } else {
        return "Invalid number"; 
      }
    } 
    return result;
  };
  
  this.getUnit = function(input) {
    var exp = /(gal|l|mi|km|lbs|kg)$/gi;
    var result = input.match(exp);
    if(!result) return 'Invalid unit';
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const input = initUnit.toString().toLowerCase();
    switch(input) {
      case 'gal':
        return 'l';
        break;
      case 'l':
        return 'gal';
        break;
      case 'mi':
        return 'km';
        break;
      case 'km':
        return 'mi';
        break;
      case 'lbs':
        return 'kg';
        break;
      case 'kg':
        return 'lbs';
        break;
      default:
        return 'Invalid unit';
        break;
    }
  };

  this.spellOutUnit = function(unit) {
    const input = unit.toString().toLowerCase();
    switch(input) {
      case 'gal':
        return 'gallons';
        break;
      case 'l':
        return 'liters';
        break;
      case 'mi':
        return 'miles';
        break;
      case 'km':
        return 'kilometers';
        break;
      case 'lbs':
        return 'pounds';
        break;
      case 'kg':
        return 'kilograms';
        break;
      default:
        return 'Invalid unit';
        break;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const input = initUnit.toString().toLowerCase();
    
    switch(input) {
      case 'gal':
        return initNum * galToL;
        break;
      case 'l':
        return initNum / galToL;
        break;
      case 'lbs':
        return initNum * lbsToKg;
        break;
      case 'kg':
        return initNum / lbsToKg;
        break;
      case 'mi':
        return initNum * miToKm;
        break;
      case 'km':
        return initNum / miToKm;
        break;
      default:
        return 'Invalid init unit';
        break;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit + '.';
    return result;
  };
  
}

module.exports = ConvertHandler;
