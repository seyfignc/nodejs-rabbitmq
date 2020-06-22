const amqp = require("amqplib")


connect_rabbitmq();
async function connect_rabbitmq() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672")

        const channel = await connection.createChannel();

        const assertion = await channel.assertQueue("jobsQueue1")

        //Mesajın Alınması
        channel.consume("jobsQueue1",response=>{
            var sfdf=response;
           console.log("Message",response.content.toString())
        })

        
    } catch (error) {
      console.log("Error",error)
    }
}