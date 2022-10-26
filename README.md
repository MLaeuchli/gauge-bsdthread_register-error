# gauge-bsdthread_register-error

This is a minimal Project to run a simple Gauge-Taiko test.


On Mac OS 12.6 and 13.0 with an Intel core this results in the following error:



>fatal error: runtime: bsdthread_register error
>runtime stack:
>runtime.throw(0x14241cd, 0x21)
>	/usr/local/go/src/runtime/panic.go
>:616 +0x81 fp=0x7ff7bfefe228 sp=0x7ff7bfefe208 pc=0x1028d41
>runtime.goenvs()
>	/usr/local/go/src/runtime/os_darwin.go:129 +0x83 fp=0x7ff7bfefe258 sp=0x7ff7bfefe228 pc=0x10268c3
>runtime.schedinit()
>	/usr/local/go/src/runtime/proc.go:501 +0xd6 fp=0x7ff7bfefe2c0 sp=0x7ff7bfefe258 pc=0x102b636
>runtime.rt0_go(0x7ff7bfefe2f0, 0x1, 0x7ff7bfefe2f0, 0x1000000,
>0x1, 0x7ff7bfefe6d0, 0x0, 0x7ff7bfefe6e0, 0x7ff7bfefe6ed, 0x7ff7bfefe724, ...)
>	/usr/local/go/src/runtime/asm_amd64.s:252 +0x1f4 fp=0x7ff7bfefe2c8 sp=0x7ff7bfefe2c0 pc=0x1050d24
>Error starting plugin Html Report 4.0.8. Failed to connect to plugin. Timed out connecting to 127.0.0.1:49475



The test will run normaly but no Report is created.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-kez9lc)