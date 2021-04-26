// по умолчанию присваивает переменным значения 0, 1, etc
enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart 
console.log(membership)// return  1
// we can use index of element
const membershipReverse = Membership[2]
console.log(membershipReverse); // print Premium

// если мы явно задаем значения ключей то при обращении к ключу мы получаем это значение возможно удобно для создания типов
// вообщем как объект только пронумеровннный
enum SocialMedia {
    VK = "VK",
    FB = 'FB',
    INST = 'INST',
}

const social = SocialMedia.INST

console.log(social); // INST
