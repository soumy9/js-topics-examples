function ExplainPrototype(data){
this.base=10;
	this.data=data+this.base;
  function getData(){
  return this.data+this.base;
  }
}

/* This would NOT WORK
ExplainPrototype.prototype.getData = ()=>{
  return this.data+this.base;
}
 */
ExplainPrototype.prototype.getData = function(){
	return this.data+this.base;
}

const functionInstance1 = new ExplainPrototype(1);
const functionInstance2 = new ExplainPrototype(2);

console.log(functionInstance1.prototype);
console.log(ExplainPrototype.prototype);
ExplainPrototype.base = 100;
console.log(functionInstance1.data);
console.log(functionInstance2.data);
ExplainPrototype.prototype.base = 100;
console.log(functionInstance1.data);
console.log(functionInstance2.data);
const functionInstance3 = new ExplainPrototype(3);
console.log(functionInstance3.data);
console.log(functionInstance1.getData());
console.log(functionInstance2.getData());
console.log(functionInstance3.getData());
