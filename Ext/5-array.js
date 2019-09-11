let arr =  [ {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
}];
console.log(arr);



const people = [
    { name: 'Yarik', phone: '+3123321'},
    { name: 'Dima',phone: '+3123342424321'},
    { name: 'DIma',phone: '+312635633321'},
];

const findPhoneByName = name => {
    for (const phoneNumber of people) {
        if (phoneNumber.name == name) return phoneNumber.phone;
    }    
};

console.log(findPhoneByName('Yarik'));