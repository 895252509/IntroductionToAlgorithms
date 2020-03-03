/**
 * 链表
 */
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

/**
 * 栈
 */
const STACK_INIT_SIZE = 100;
const STACKINCREMENT = 10;
class SqStack extends Array{
  constructor(){
    super();

    this.base = 0;
    this.top = 0;
    this.stacksize = 0;

    // init
    this.stacksize = STACK_INIT_SIZE;
    this.base = 0;
    this.top = 0;
  }

  destroy(){

  }
  clear(){
    this.top = 0;
    this.stacksize = STACK_INIT_SIZE;
  }
  empty(){
    return this.top === 0;
  }
  length(){
    return this.top + 1;
  }
  topv(){
    if( this.top === 0 ) return null;
    return this[this.top];
  }
  push(e){
    if( this.top >= this.stacksize ){
      this.top = this.base + this.stacksize;
      this.stacksize += STACKINCREMENT;
    }
    this[++this.top] = e;
  }
  pop(){
    if( this.top === this.base ) return null;
    return this[this.top--];
  }
  traverse(){

  }
}

class StackUseCase{
  constructor(){

  }

  static conversion10to8(n){
    const s = new SqStack();
    while( n > 0 ){
      s.push( n % 8 );
      n = Math.floor(n / 8);
    }
    let str = "";
    while (!s.empty()) {
      str += s.pop();
    }
    console.log(str);
  }

  static bracketTest(s){
    const st = new SqStack();
    const mapping = {
      '(': 1,
      '[': 2,
      '{': 3,
      ')': -1,
      ']': -2,
      '}': -3
    }
    for (const c of Array.from(s)) {
      if( mapping[c] > 0) {
        st.push(c);
      }else if( mapping[st.topv()] === -mapping[c] ){
        st.pop();
      }else{
        st.push(c);
      }
    }
    return st.empty();
  }

  static lineEdit(str){
    const s = new SqStack();
    let ret = "";
    function save(){
      while(!s.empty()){
        ret+= s.pop();
      }
      ret+='\n';
    }
    for (const c of Array.from(str)) {
      if( c === '\n' ){
        // 
        save();
        s.clear();
      }
      switch (c) {
        case '#':
          s.pop();
          break;
        case '@':
          s.clear();
          break;
        default:
          s.push(c);
          break;
      }
    }
    save();
    return ret;
  }

  /**
   * 迷宫求解
   * @param {[][]} maze
   * maze
   *    0  1  2  3  4  5  6  7  8  9
   *0  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
   *1 ,[1, 0, 0, 1, 0, 0, 0, 1, 0, 1]
   *2 ,[1, 0, 0, 1, 0, 0, 0, 1, 0, 1]
   *3 ,[1, 0, 0, 0, 0, 1, 1, 0, 0, 1]
   *4 ,[1, 0, 1, 1, 1, 0, 0, 0, 0, 1]
   *5 ,[1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
   *6 ,[1, 0, 1, 0, 0, 0, 1, 0, 0, 1]
   *7 ,[1, 0, 1, 1, 1, 0, 1, 1, 0, 1]
   *8 ,[1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
   *9 ,[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
   * 1:不能通过的墙
   * 0:可以通过的路
   */
  static maze = 
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ,[1, 0, 0, 1, 0, 0, 0, 1, 0, 1]
  ,[1, 0, 0, 1, 0, 0, 0, 1, 0, 1]
  ,[1, 0, 0, 0, 0, 1, 1, 0, 0, 1]
  ,[1, 0, 1, 1, 1, 0, 0, 0, 0, 1]
  ,[1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  ,[1, 0, 1, 0, 0, 0, 1, 0, 0, 1]
  ,[1, 0, 1, 1, 1, 0, 1, 1, 0, 1]
  ,[1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
  ,[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
  static mazePath(maze){
    function step(ord, seat, di){
      this.ord = ord || 0;
      this.seat = seat || [];
      this.di = di || 0;
    }
    function pass(curpos){
      return true;
    }
    function foot(curpos){

    }
    function nextpos(curpos, di){
      return [];
    }
    const s = new SqStack();
    let start = [1,1];
    let end = [8,8];
    let curpos = start;
    let curstep = 1;
    do{
      if(pass(curpos)){ //判断当前位置是否可以通过（未曾走到过的通道块）
        foot( curpos ); //留下足迹
        let e = new step(curstep, curpos, 1);
        s.push(e);      //加入到路径
        if( curpos[0] === end[0] && curpos[1] === end[1] ) return true; //到达终点
        curpos = nextpos(curpos, 1);  //下一个位置是当前位置的东
        curstep++;                    //探索下一步
      }else{
        if( !s.empty() ){
          let ne = s.pop();
          while( ne.di === 4 && !s.empty() ){
            markpos(e.seat);
            ne = s.pop();             //留下不能通过的标记，并且退后一步
          }
          if( ne.di < 4 ){
            ne.di++;
            s.push(ne);               //换下一个方向探索
            curpos = nextpos(ne.seat, ne.di);   //设定当前位置是新方向上的相邻块
          }
        }
      }
    }while( !s.empty() );

    return false;
  }
}



























