interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age