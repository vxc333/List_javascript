// Definindo a classe Node
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Definindo a classe DoublyLinkedList
class DoublyLinkedList {
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
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Insere um elemento em uma posição específica da lista
  insert(position, data) {
    if (position < 0 || position > this.size()) {
      console.log('Posição inválida');
      return;
    }

    const newNode = new Node(data);

    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.size()) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;

      while (index < position) {
        current = current.next;
        index++;
      }

      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
  }

  // Remove um elemento de uma posição específica da lista
  removeAt(position) {
    if (position < 0 || position >= this.size()) {
      console.log('Posição inválida');
      return;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (position === this.size() - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let index = 0;

      while (index < position) {
        current = current.next;
        index++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
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
    }

    return count;
  }

  // Converte a lista em uma string
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += current.data.toString() + ' <=> ';
      current = current.next;
    }

    string += 'null';
    return string;
  }
}

// Exemplo de uso
const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(10);
doublyLinkedList.append(20);
doublyLinkedList.append(30);

console.log(doublyLinkedList.toString()); 

doublyLinkedList.insert(1, 15);

console.log(doublyLinkedList.toString()); 

console.log(doublyLinkedList.remove(20)); 

console.log(doublyLinkedList.toString()); 
