- node最为人所津津乐道的特点就是高性能，nodejs并不像传统的服务器一样每次请求来了就创建一个线程来处理或者从线程池中取一个线程来处理，而是一种单线程模型，主线程只有一个，这个主线程会服务于我们所有的客服端发过来的请求。它在底层大量使用了**事件驱动**，当某个事件发生了，就触发相应的逻辑来执行，另外一个事件发生了，就触发另外一个流程；它用了大量的异步回调。单线程指的是主线程只有一个，即用于处理客户请求的线程只有一个，其背后还有一个线程池，线程池会处理长时间运行的一些任务，比如读取io，网络操作等等。node还会通过队列进行一个排队，把请求都扔到队列里，通过事件循环机制来从队列中取出请求进行处理。
- 高性能因素总结：
  1. 依靠事件循环机制处理请求
  2. 大量使用异步和回调
  3. 主线程是单线程，主线程并不会处理具体的任务，仅仅是接收客户端请求，然后把请求扔到队列中，由事件循环机制来处理



- node本身能够做到如此高性能的根本原因在于事件(event)的使用，以及对于事件监听者(listener, callback)的调用上

- node本身是基于事件循环机制的

- 本质上，当node启动一个文件或者服务器后，node实际上是运行在一个死循环中的
```java
     while(true){
         ...
     }
```
- 在这个死循环中，node会不断发射事件，监听事件并执行回调逻辑
  - 对于发射事件来说，有两种场景，
    - 第一种是我们通过程序代码来发射事件(emit方法)
    - 第二种就是来自于node本身所运行的环境，比如我们用node启动了一个httpServer，httpServer会监听request事件、disconnect事件等等
  - 监听事件，指的是我们在node中所配置的相关的回调逻辑，回调逻辑都是要依附于相应的事件的，
  - 执行回调逻辑：本质上都是由底层(操作系统/node依赖的c++模块)来执行的
- node本身是异步执行的，这里的异步执行特别指的是IO操作，关于IO操作的异步执行逻辑：
  1. 同步模式：对于IO密集型操作，CPU的资源利用率不高
  2. 异步模式：select、poll、epoll、IOCP(windows)
     1. select：它本身是对于fd的一个判断，如果fd已经就绪了，那么select就可以进行调用，而select本身是基于轮询的，定期去检查所有的fd，哪个就绪了就调用哪个，过了一段时间之后再去调用一次。
     2. poll：类似于select
     3. epoll：它本身是基于事件的响应机制，当它收到了某个事件，比如文件读取完毕的事件、数据已经发过来了的事件，收到事件后就会调用相关的处理逻辑，如果在一段时间内没有事件发生，epoll这个逻辑就会暂时进入休眠状态。直到下次被新的事件唤醒
- node的JavaScript代码是执行在惟一的一个线程上面，这个线程称为主线程，对于IO等涉及到阻塞的操作，都是由底层操作系统提供的线程池来执行的，不同的操作系统，线程池的实现是不同的，比如IOCP(Windows)，libuv(Linux)。所以平时开发中，不能在主线程中阻塞node的执行逻辑
- 当我们在程序中引入了某个第三方模块时，那么整体的全部执行逻辑如下所示：
   node -> 第三方模块 -> 原生模块(node平台自带的模块，比如http、url等等) -> 原生模块内部实现 -> c++ 模块 -> libuv(IO操作) -> 线程池 -> 线程 -> 执行底层的IO操作(涉及到操作系统调用)
- 不同的操作系统，实现不同，所以在node在执行过程中，它会判断当前的操作系统类型，如上，在c++模块调用中进行判断后，如果是Windows系统，就会调用IOCP进行IO操作，而不是libuv。
- node完整的事件循环逻辑：
  1. 启动Node运行时
  2. 检测是否有待处理的事件
  3. 如果没有，回到循环开始出
  4. 如果有，那么从事件队列中取出一个事件
  5. 判断当前这个事件有没有与之关联的事件处理器（回调）
  6. 如果没有，回到循环开始处
  7. 如果有，则执行事件的回调逻辑
  8. 回到循环开始处，开始新一轮的事件检测流程

- 如上整个node的执行过程，实际上是由完整的事件循环机制 + 底层的操作系统异步IO调用 + 线程池(底层库实现或由操作系统提供)共同配合来完成的

- 对于单线程node来说，是否无法利用到多核的优势呢？
  - 从node主线程来看，它是个单线程，只能运行在一个核心上面，确实不会用到多核
  - 但对于底层的线程池来说，它们却可以运行在多个核心上面，当然也可以同时运行，因此它们是完全可以利用到多核优势的
- NodeJs中的process表示node代码所运行的那个线程，node本身又是单线程的，这种系统设计下，node就适合做IO密集型的操作，由于主线程只有一个，如果执行了CPU密集型的任务，就会影响后续操作的执行。基于此，node引入了child_process模块，当一个node在运行过程中，它可以在任何时刻再去启动一个进程，如果任务占用大量CPU资源，这是就可以再去开一个进程。这个进程就是原进程的子进程，在这个子进程中就可以进行CPU计算操作，主线程依旧进行事件响应和回调执行。子进程又能产生子进程。



