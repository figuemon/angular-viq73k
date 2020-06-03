interface test {
    imp(): number
}

class test {
    static imp() { return 123 }
}

export class test2 /* extends something */ implements test {
    imp() { return test.imp() }
}