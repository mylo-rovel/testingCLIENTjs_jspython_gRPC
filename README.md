# helloworld_webgRPC
A tiny little project to test connection via gRPC between a webBrowser and a Python Server

For local development:
1. DON'T FORGET TO RUN THE ENVOY DOCKER CONTAINER
2. ALSO DON'T FORGET TO UPDATE THE IP THAT'S GONNA BE REACHED (SERVER IP MACHINE ADDRESS)
.
envoy.yaml contain the command as a comment
modify this two items in the above file (search those items):
address:
        socket_address: { address: ${PORT}, port_value: 8080 }

socket_address:
    address: ${PORT}
    port_value: 9090

PORT should be the server machine (hopefully raspberry pi) ip
you can check it by typing at the raspi terminal: "ifconfig" => look for the "inet" value at "eth0" item
.
.
.
.
.
.
.
.
TIP: To test build files, run "npm run build" and "python3 -m http.server 8081" => 8081 is a generic port so we can access the files

First start with:
npm install

If you want to start dev server:
npm run start

If you want to build a production build:
npm run build
