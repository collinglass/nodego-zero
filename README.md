# nodego-zero

A simple example of using ZeroMQ to link a Node with a Go service.

### Overview

10 requests are sent immediately into ZeroMQ. The request reply pattern is used
 in which case all subsequent requests are blocked until the previous is received
and replied to.
