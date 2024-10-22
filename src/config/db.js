import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            // `mongodb://localhost:27017/nome`
            `mongodb+srv://cesareal9:T1D8BkJeqGGrBsAt@cluster0.5vbik.mongodb.net/produtos`
    );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;