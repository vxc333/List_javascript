// Definindo a classe Node
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Definindo a classe DoublyCircularLinkedList
  class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Adiciona um elemento no final da lista
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // Se a lista estiver vazia, o novo nó se torna o head e o tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        // O novo nó aponta para o head e o head aponta para o novo nó
        newNode.next = this.head;
        this.head.prev = newNode;
        // O tail aponta para o novo nó
        this.tail.next = newNode;
        newNode.prev = this.tail;
        // O novo nó se torna o tail
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
          // Se a lista estiver vazia, o novo nó se torna o head e o tail
          this.head = newNode;
          this.tail = newNode;
        } else {
          // O novo nó aponta para o head e o head anterior aponta para o novo nó
          newNode.next = this.head;
          this.head.prev = newNode;
          // O tail aponta para o novo nó
          this.tail.next = newNode;
          newNode.prev = this.tail;
          // O novo nó se torna o head
          this.head = newNode;
        }
      } else if (position === this.size()) {
        // Se a posição for igual ao tamanho da lista, o novo nó é adicionado ao final usando a função append()
        this.append(data);
      } else {
        let current = this.head;
        let index = 0;
  
        while (index < position) {
          current = current.next;
          index++;
        }
  
        // O novo nó aponta para o nó atual e para o nó anterior ao atual
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
        // Se a posição for igual a 0, remove o head e atualiza o head e o tail
        this.head = current.next;
        if (this.head) {
          this.head.prev = this.tail;
          this.tail.next = this.head;
        } else {
          this.tail = null;
        }
      } else if (position === this.size() - 1) {
        // Se a posição for igual ao tamanho da lista menos 1, remove o tail e atualiza o tail e o head
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = this.head;
        this.head.prev = this.tail;
      } else {
        let index = 0;
  
        while (index < position) {
          current = current.next;
          index++;
        }
  
        // Remove o nó atual atualizando os ponteiros do nó anterior e do próximo nó
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
        // Verifica se retornou ao head, indicando que o elemento não foi encontrado
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
        // Verifica se retornou ao head, indicando o final da lista
        if (current === this.head) {
          break;
        }
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
        // Verifica se retornou ao head, indicando o final da lista
        if (current === this.head) {
          break;
        }
      }
  
      string += 'null';
      return string;
    }
  }
  
  // Exemplo de uso
  const doublyCircularLinkedList = new DoublyCircularLinkedList();
  
  doublyCircularLinkedList.append(10);
  doublyCircularLinkedList.append(20);
  doublyCircularLinkedList.append(30);
  
  console.log(doublyCircularLinkedList.toString());
  
  doublyCircularLinkedList.insert(1, 15);
  
  console.log(doublyCircularLinkedList.toString());
  
  console.log(doublyCircularLinkedList.remove(20));
  
  console.log(doublyCircularLinkedList.toString());
  