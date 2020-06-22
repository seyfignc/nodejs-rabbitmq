const amqp = require("amqplib")

const message = {
    description:"Bu bir test mesajıdır"
}
connect_rabbitmq();
async function connect_rabbitmq() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672")

        const channel = await connection.createChannel();

        const assertion = await channel.assertQueue("jobsQueue1")

        channel.sendToQueue("jobsQueue1", Buffer.from(JSON.stringify(message)))
        console.log("Gönderilen mesaj",message)
    } catch (error) {
      console.log("Error",error)
    }
}