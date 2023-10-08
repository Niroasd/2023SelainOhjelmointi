let arr = [];

const musician = { 
    name: 'Sting', 
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: { 
      type: 'bass' 
    } 
  };

const musician1 = { 
    name: 'Sting', 
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: { 
        type: 'bass' 
    } 
};

arr.push(musician, musician1);

for(x in musician){
    console.log(`${x}`);
}