// Definindo a classe Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Definindo a classe CircularLinkedList
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adiciona um elemento no final da lista
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode; // O próximo nó aponta para si mesmo
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Insere um elemento em uma posição específica da lista
  insert(position, data) {
    if (position < 0 || position > this.size()) {
      console.log("Posição inválida");
      return;
    }

    const newNode = new Node(data);

    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; // O próximo nó aponta para si mesmo
      } else {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head = newNode;
      }
    } else if (position === this.size()) {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;

      while (index < position - 1) {
        current = current.next;
        index++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // Remove um elemento de uma posição específica da lista
  removeAt(position) {
    if (position < 0 || position >= this.size()) {
      console.log("Posição inválida");
      return;
    }

    let current = this.head;

    if (position === 0) {
      if (this.size() === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = current.next;
        this.tail.next = this.head;
      }
    } else {
      let index = 0;
      let previous = null;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;

      if (position === this.size() - 1) {
        this.tail = previous;
      }
    }

    return current.data;
  }

  // Remove um elemento da lista
  remove(data) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }

  // Retorna a posição de um elemento na lista
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
      if (current === this.head) {
        break;
      }
    }

    return -1;
  }

  // Verifica se a lista está vazia
  isEmpty() {
    return this.head === null;
  }

  // Retorna o tamanho da lista
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
      if (current === this.head) {
        break;
      }
    }

    return count;
  }

  // Converte a lista em uma string
  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.data.toString() + " -> ";
      current = current.next;
      if (current === this.head) {
        break;
      }
    }

    string += "null";
    return string;
  }
}

// Exemplo de uso
const circularLinkedList = new CircularLinkedList();

circularLinkedList.append(10);
circularLinkedList.append(20);
circularLinkedList.append(30);

console.log(circularLinkedList.toString());

circularLinkedList.insert(1, 15);

console.log(circularLinkedList.toString());
console.log(circularLinkedList.remove(20)); 
console.log(circularLinkedList.toString()); 
