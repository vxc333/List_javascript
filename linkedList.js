// Definindo a classe Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Definindo a classe LinkedList
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adiciona um elemento no final da lista
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
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
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      previous.next = newNode;
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
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
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
      string += current.data.toString() + ' -> ';
      current = current.next;
    }

    string += 'null';
    return string;
  }
}

// Exemplo de uso
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.toString()); 

linkedList.insert(1, 15);

console.log(linkedList.toString()); 

console.log(linkedList.remove(20)); 

console.log(linkedList.toString()); 
