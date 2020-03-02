class LNode{
  constructor(d, n){
    this.data = d || null;
    this.next = n || null;
  }
}

class LinkList extends LNode{
  /**
   * 类本身就是一个节点，就是链表的头节点
   */
  constructor(d, n){
    super(d, n);

  }

  get(i){
    let p = this.next;
    let j = 1;
    while (p && j < i) {
      p = p.next;
      ++j;
    }
    if( !p || j > i ) return null;
    return p.data;
  }

  insert(i, n){
    let p = this, j = 0;
    while( p && j < i - 1 ) {
      p = p.next;
      ++j;
    }
    if( !p || j > i ) return false;
    n.next = p.next;
    p.next = n;
    return true;
  }

  delete(i){
    let p = this, j = 0;
    while (p.next && j < i - 1) {
      p = p.next;
      ++j;
    }
    if( !(p.next) || j > i - 1 ) return -1;
    let q = p.next;
    p.next = q.next;
    q.next = null;
    return q;
  }
}





























