/*
  node本身能够做到如此高性能的根本原因在于事件(event)的使用，以及对于事件监听者(listener, callback)的调用上，

  node本身是基于事件循环机制的

  本质上，当node启动一个文件或者服务器后，node实际上是运行在一个死循环中的
  while(true){
  }
  在这个死循环中，node会不断发射事件，监听事件并执行回调逻辑
  事件来源主要有两种：一是node自身所发射出的事件，二是来自于node自身所运行的环境
  监听事件：回调都是要依附于相应的事件的
  执行回调逻辑：本质上都是由底层(操作系统/node依赖的c++模块)来执行的
  关于IO操作的异步执行逻辑：epoll(linux)、IOCP(windows)
  Node的单线程：所谓的单线程，指的是Node的逻辑执行主线程是单线程的，即JavaScript代码运行所处的线程，
  这个是单线程，因为JavaScript本身只能执行在单线程中
  当我们在程序中引入了某个第三方模块时，那么整体的全部执行逻辑如下所示：
  node -> 第三方模块 -> 原生模块 -> 原生模块内部实现 -> c++ -> libuv(IO操作) -> 线程池 -> 线程 -> 执行底层的IO操作(涉及到操作系统调用)
  当node在执行过程中，它会判断当前的操作系统类型：
  node完整的事件循环逻辑：
  1. 启动Node运行时
  2. 检测是否有待处理的事件
  3. 如果没有，回到循环开始出
  4. 如果有，那么从事件队列中取出一个时间
  5. 判断当前这个事件有没有与之关联的事件处理器（回调）
  6. 如果没有，回到循环开始处
  7. 如果有，则执行事件的回调逻辑
  8. 回到循环开始处，开始新一轮的事件检测流程

    整个node的执行过程，实际上是由完整的事件循环机制 + 底层的操作系统异步IO调用 + 线程池(底层库实现或由操作系统提供)共同配合来完成的

    对于单线程node来说，是否无法利用到多核的优势呢？
    从node主线程来看，它是个单线程，只能运行在一个核心上面，确实不会用到多核
    但对于底层的线程池来说，它们却可以运行在多个核心上面，当然也可以同时运行，因此它们是完全可以利用到多核优势的



 */