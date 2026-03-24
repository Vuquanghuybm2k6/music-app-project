import mongoose from 'mongoose'
export const connect = async ():Promise<void>=>{
  try{
    const mongoUrl: string = process.env.MONGO_URL as string
    await mongoose.connect(mongoUrl)
    console.log("Connect success!")
  }
  catch(error){
    console.log("Connect error!")
  }
}