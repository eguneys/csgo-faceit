export class Color {

  static a = new Color('a')
  static b = new Color('b')

  static all = [Color.a, Color.b]

  get a() {
    return this === Color.a
  }

  get b() {
    return this === Color.b
  }
  
  constructor(readonly letter: string) {
    
  }

  fold<A>(a: A, b: A) {
    return this.a ? a : b;
  }
  
}
